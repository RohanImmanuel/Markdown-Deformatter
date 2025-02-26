// Set placeholder text dynamically for multi-line support
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("markdownInput").placeholder = 
`**Bold Text**
*Italic Text*
~~Strikethrough~~

# Heading 1
## Heading 2

[Google](https://google.com)

> Blockquote

- List Item 1
- List Item 2

1. Ordered Item 1
2. Ordered Item 2

\`Inline Code\`

\`\`\`js
console.log('Code Block');
\`\`\``;

    document.getElementById("plainTextOutput").placeholder = 
`Bold Text
Italic Text
Strikethrough

Heading 1
Heading 2

Google

Blockquote

List Item 1
List Item 2

Ordered Item 1
Ordered Item 2

Inline Code

console.log('Code Block');`;
});

// Convert Markdown to Plain Text
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
