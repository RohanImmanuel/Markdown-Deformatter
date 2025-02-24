document.getElementById("convertBtn").addEventListener("click", function () {
    let markdownText = document.getElementById("markdownInput").value;
    
    // Convert Markdown to plain text while preserving line breaks
    let plainText = markdownText
        .replace(/(\*\*|__)(.*?)\1/g, "$2") // Bold
        .replace(/(\*|_)(.*?)\1/g, "$2") // Italics
        .replace(/~~(.*?)~~/g, "$1") // Strikethrough
        .replace(/`(.*?)`/g, "$1") // Inline code
        .replace(/#{1,6}\s*(.*)/g, "$1") // Headings
        .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Links
        .replace(/!\[(.*?)\]\(.*?\)/g, "$1") // Images
        .replace(/>\s?(.*)/g, "$1") // Blockquotes
        .replace(/\*\s(.*)/g, "$1") // Unordered lists
        .replace(/\d+\.\s(.*)/g, "$1") // Ordered lists
        .replace(/---/g, "") // Horizontal rules
        .replace(/\r\n/g, "\n") // Normalize Windows line endings
        .replace(/\n{2,}/g, "\n\n"); // Preserve multiple line breaks

    document.getElementById("plainTextOutput").value = plainText;
});
