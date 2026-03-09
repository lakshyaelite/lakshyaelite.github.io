// Calculate reading time based on word count
// Average reading speed: 200 words per minute
module.exports = function(content) {
  if (!content) return '1 min read';

  // Remove HTML tags and get plain text
  const text = content.replace(/<[^>]*>/g, '');
  const wordCount = text.trim().split(/\s+/).length;

  // Calculate reading time
  const wordsPerMinute = 200;
  const minutes = Math.ceil(wordCount / wordsPerMinute);

  return `${minutes} min read`;
};