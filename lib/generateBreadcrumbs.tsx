"use client";
export function generateBreadcrumbs(
  pathname: string
): { active?: boolean; href?: string | null; key: string; content: string }[] {
  const asPathWithoutQuery = pathname.split("?")[0];
  const asPathNestedRoutes = asPathWithoutQuery
    .split("/")
    .filter((v) => v.length > 0);

  const crumblist = asPathNestedRoutes.map((subpath, idx) => {
    const key = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");

    function makeTitle(slug: string) {
      var words = slug.split("-");

      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
      }

      return words.join(" ");
    }

    return { key, content: makeTitle(subpath) };
  });

  return crumblist.map((x) => {
    const active = x.key === pathname;

    return { ...x, active, href: active ? null : x.key };
  });
}
