"""B1-1 webpage essential HTML contract tests (stdlib only)."""
from html.parser import HTMLParser
from pathlib import Path
import unittest


class PortfolioMarkup(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.tags = set()
        self.sections = set()
        self.ids = set()
        self.labels = set()
        self.images = []
        self.stylesheets = []
        self.scripts = []
        self.language = None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        self.tags.add(tag)
        if a.get("id"):
            self.ids.add(a["id"])
        if tag == "html":
            self.language = a.get("lang")
        if tag == "section":
            self.sections.add(a.get("id"))
        if tag == "label":
            self.labels.add(a.get("for"))
        if tag == "img":
            self.images.append(a)
        if tag == "link" and a.get("rel") == "stylesheet":
            self.stylesheets.append(a.get("href", ""))
        if tag == "script" and a.get("src"):
            self.scripts.append(a)


class PortfolioContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        root = Path(__file__).resolve().parents[1]
        source = (root / "index.html").read_text(encoding="utf-8")
        cls.page = PortfolioMarkup()
        cls.page.feed(source)
        cls.page.close()

    def test_korean_document(self):
        self.assertEqual(self.page.language, "ko")

    def test_semantic_sections(self):
        self.assertTrue({"header", "nav", "main", "h1", "footer"} <= self.page.tags)
        self.assertTrue({"hero", "about", "skills", "projects", "contact"} <= self.page.sections)

    def test_assets_are_external_and_deferred(self):
        self.assertTrue(any(x.endswith(".css") for x in self.page.stylesheets))
        self.assertTrue(any(x.get("src", "").endswith(".js") and "defer" in x
                            for x in self.page.scripts))

    def test_accessible_contact_fields(self):
        self.assertTrue({"name", "email", "message"} <= self.page.ids)
        self.assertTrue({"name", "email", "message"} <= self.page.labels)

    def test_image_alternatives(self):
        self.assertTrue(all((img.get("alt") or "").strip() for img in self.page.images))


if __name__ == "__main__":
    unittest.main()
