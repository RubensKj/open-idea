import customProtocolCheck from "custom-protocol-check";

export function getToolboxURN(toolTag: string, cloneUrl: string) {
  // return `jetbrains://${toolTag}/checkout/git?checkout.repo=${cloneUrl}&idea.required.plugins.id=Git4Idea`;
  return `jetbrains://${toolTag}/checkout/git?checkout.repo=${cloneUrl}&idea.required.plugins.id=Git4Idea`;
}

export function openInIdea(tool: string, repoUrl: string) {
  const ideaUrl = getToolboxURN(tool, repoUrl);

  customProtocolCheck(
    ideaUrl,
    () => {
      alert("Custom protocol not found.");
      // Handle another app in here.
    },
    () => {
      alert("Custom protocol found and opened the file successfully.");
    }
  );
}