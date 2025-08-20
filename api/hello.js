export default function handler(req, res) {
    const nome = req.query.name || "Mundo";
    res.status(200).json({ message: `Olá, ${nome}!` });
}
