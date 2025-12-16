export const blogInfo = {
  name: "Freshbase Blog",
  description: "Tips and guides for aspiring app builders and vibe coders",
}

export type BlogPost = {
  link: string
  date: string // date is a string 'YYYY-MM-DD'
  title: string
  description: string
  parsedDate?: Date // Optional because it's added dynamically
}

// Update this list with the actual blog post list
// Create a page in the "(posts)" directory for each entry
const blogPosts: BlogPost[] = [
  {
    title: "From Idea to Launch: The Vibe Coder's Guide to Shipping Your First App",
    description: "Stop overthinking. Start shipping. A practical 5-step guide for aspiring app builders who want to turn their ideas into reality.",
    link: "/blog/from_idea_to_launch_vibe_coding_guide",
    date: "2024-12-16",
  },
]

// Parse post dates from strings to Date objects
for (const post of blogPosts) {
  if (!post.parsedDate) {
    const dateParts = post.date.split("-")
    post.parsedDate = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
    ) // Note: months are 0-based
  }
}

export const sortedBlogPosts = blogPosts.sort(
  (a: BlogPost, b: BlogPost) =>
    (b.parsedDate?.getTime() ?? 0) - (a.parsedDate?.getTime() ?? 0),
)
