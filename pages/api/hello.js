// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
