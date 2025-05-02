
export default function Dashboard() {
  return (
    <main className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4">Bol Productanalyses</h1>
      <h2 className="text-xl font-semibold mb-2">Ontdek verborgen winst op Bol.com</h2>
      <p className="mb-6">Welkom bij jouw persoonlijke Bol Productanalyses dashboard.</p>

      <section className="mb-4">
        <h3 className="text-lg font-bold">📦 Samengevoegde batches (2024 & 2025)</h3>
        <ul className="list-disc list-inside">
          <li>Grey list dec 2024</li>
          <li>Grey list mei 2025 (incl. babyproducten)</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3 className="text-lg font-bold">📈 Prijsanalyse</h3>
        <p>Bekijk waar jouw verkoopprijs afwijkt van de marktprijs.</p>
      </section>

      <section className="mb-4">
        <h3 className="text-lg font-bold">🧁 Verdeling per categorie</h3>
        <p>Pie chart met verdeling per category_a en vendor (live in echte versie).</p>
      </section>

      <section className="mb-4">
        <h3 className="text-lg font-bold">📋 Sorteerbare tabel</h3>
        <p>Toon marge, prijs, merknaam per batch.</p>
      </section>

      <section className="mb-4">
        <h3 className="text-lg font-bold">🧪 Benchmark-functie</h3>
        <p>Gemiddeld en maximaal verschil tussen jouw prijs en relevante marktprijs.</p>
      </section>

      <section className="mb-4">
        <h3 className="text-lg font-bold">🛠️ Klantomgeving</h3>
        <p>Dit dashboard simuleert een klantomgeving. Jouw bedrijfsnaam komt hier te staan.</p>
      </section>

      <section className="mb-4">
        <h3 className="text-lg font-bold">💬 Call-to-action</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Vraag jouw eigen dashboard aan
        </button>
      </section>

      <p className="mt-6 font-semibold">Vanaf €20/maand toegang tot jouw inzichten.</p>
      <p>Contact opnemen? Mail ons via: info@bolproductanalyses.com</p>
    </main>
  );
}
