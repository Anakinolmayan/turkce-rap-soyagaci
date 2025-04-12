// 📁 Proje Yapısı (turkce-rap-soyagaci)
// ├── public/
// │   └── index.html
// ├── src/
// │   ├── App.jsx         ← Ana React bileşeni (bu dosya)
// │   ├── index.css       ← TailwindCSS için stiller
// │   └── main.jsx        ← Uygulama giriş noktası
// ├── tailwind.config.js  ← Tailwind yapılandırması
// ├── postcss.config.js   ← Tailwind için PostCSS ayarı
// ├── package.json        ← Bağımlılıklar ve scriptler
// └── README.md           ← Proje açıklaması ve kurulum bilgisi

// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TurkceRapTree from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TurkceRapTree />
  </React.StrictMode>
);

// index.css
// Bu dosyayı src/index.css olarak kaydetmelisin:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// App.jsx aşağıda devam ediyor...

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const data = {
  name: "Türkçe Rap’in Doğuşu (1990’lar)",
  description: "Türkçe rap'in Almanya'daki Türk gençleri arasında ortaya çıkışı. Cartel ile geniş kitlelere ulaşmıştır.",
  children: [
    {
      name: "Cartel",
      year: 1995,
      albums: ["Cartel (1995)"],
    },
    {
      name: "Nefret (Ceza & Dr. Fuchs)",
      year: 1998,
      albums: ["Meclisi Ala - İstanbul (2000)", "Anahtar (2001)", "Savaş Çocukları (2002)"],
      children: [
        {
          name: "Boombap & Battle Rap",
          description: "Sert beat'ler, teknik flow ve sözlü çatışmalar. 2000'lerde yükseldi.",
          children: [
            { name: "Ceza", year: 2002, albums: ["Rapstar", "Yerli Plaka"] },
            { name: "Allame", year: 2011, albums: ["Yeniden Doğuyorum"] },
            { name: "Şehinşah", year: 2009, albums: ["P.O.E"] },
          ],
        },
      ],
    },
    {
      name: "Fuat",
      year: 1999,
      albums: ["Hassickdir"]
    },
    {
      name: "Sagopa Kajmer",
      year: 2001,
      albums: ["Bir Pesimistin Gözyaşları", "Romantizma"],
      children: [
        {
          name: "Felsefi & Melankolik Rap",
          description: "İçsel sorgulama, karanlık atmosfer ve derin sözler ön planda.",
          children: [
            { name: "Kolera", year: 2005, albums: ["Karantina"] },
            { name: "Sansar Salvo", year: 2004, albums: ["Seremoni Efendisi"] },
          ],
        },
      ],
    },
    {
      name: "Trap / Yeni Nesil",
      description: "2010 sonrası ortaya çıkan, melodi ve otomatik tınılarla ön planda olan rap tarzı.",
      children: [
        { name: "Ezhel", year: 2017, albums: ["Müptezhel"] },
        { name: "Khontkar", year: 2015, albums: ["Trap Kont"] },
        { name: "Ben Fero", year: 2019, albums: ["Demet Akalın"] },
        { name: "Uzi", year: 2020, albums: ["Kan"] },
        { name: "Lvbel C5", year: 2020, albums: ["C5MODE"] },
        { name: "Murda", year: 2019, albums: ["Doğa"] },
        { name: "Burry Soprano", year: 2019, albums: ["Zodyak"] },
        {
          name: "Lo-fi / Cloud Rap",
          description: "Sakin beat'ler ve dijital estetik ile duygusal rap tarzı.",
          children: [
            { name: "Bixi Blake", year: 2020, albums: ["Lo-Fi Diaries"] },
            { name: "Anıl Piyancı", year: 2014, albums: ["Zaman Yok"] },
          ],
        },
        {
          name: "Alternatif / Indie Rap",
          description: "Özgün tarzlar, farklı enstrümantasyon ve bağımsız üretim odaklı.",
          children: [
            { name: "Kamufle", year: 2014, albums: ["Hayale Daldım"] },
            { name: "Da Poet", year: 2012, albums: ["Beattape"] },
            { name: "Aga B", year: 2016, albums: ["Delüzyon"] },
          ],
        },
      ],
    },
    {
      name: "Sosyal & Politik Rap",
      description: "Toplumsal adaletsizlikler, özgürlük, eşitlik gibi konuların işlendiği politik rap.",
      children: [
        { name: "Şanışer", year: 2007, albums: ["Onuncu Gün"] },
        { name: "Tahribad-ı İsyan", year: 2014, albums: ["Tahribad-ı İsyan"] },
      ],
    },
    {
      name: "Kadın MC’ler",
      description: "Türkçe rap’te kadınların güçlü temsili.",
      children: [
        { name: "Ayben", year: 2005, albums: ["Sensin O"] },
        { name: "Kolera", year: 2005, albums: ["Karantina"] },
        { name: "Lil Zey", year: 2019, albums: ["Kara Tüy"] },
        { name: "Güneş", year: 2020, albums: ["Dua"] },
      ],
    },
    {
      name: "Underground / Battle Ligleri",
      description: "Yer altı sahnesinden çıkan freestyle ve battle rap odaklı isimler.",
      children: [
        { name: "No.1", year: 2012, albums: ["Siyah Bayrak"] },
        { name: "Hidra", year: 2015, albums: ["Paranoya"] },
      ],
    },
  ],
};

const TreeNode = ({ node }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="m-2"
    >
      <Card className="p-4 shadow-md w-fit bg-white border border-gray-200">
        <CardContent>
          <div className="text-lg font-semibold">{node.name}</div>
          {node.year && <div className="text-sm text-gray-600">Çıkış: {node.year}</div>}
          {node.albums && (
            <div className="text-sm mt-1">Albüm(ler): {node.albums.join(", ")}</div>
          )}
          {node.description && (
            <div className="text-xs mt-2 text-gray-500">{node.description}</div>
          )}
          {node.children && (
            <div className="mt-4 ml-4 border-l-2 border-gray-300 pl-4">
              {node.children.map((child, idx) => (
                <TreeNode key={idx} node={child} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function TurkceRapTree() {
  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Türkçe Rap Türleri Soyağacı</h1>
      <TreeNode node={data} />
    </div>
  );
}
