import localFont from "next/font/local";

export const InknutAntiqua = localFont({
    variable: "--font-inknut-antiqua",
    src: [
    {
      path: './inknut-antiqua/inknut-antiqua-v16-latin-300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './inknut-antiqua/inknut-antiqua-v16-latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
      {
      path: './inknut-antiqua/inknut-antiqua-v16-latin-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './inknut-antiqua/inknut-antiqua-v16-latin-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './inknut-antiqua/inknut-antiqua-v16-latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ]
})

export const SourceSerif4 = localFont({
    variable: "--font-source-serif-4",
    src: [
    {
      path: './source-serif-4/source-serif-4-v14-cyrillic_latin-300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './source-serif-4/source-serif-4-v14-cyrillic_latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
      {
      path: './source-serif-4/source-serif-4-v14-cyrillic_latin-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './source-serif-4/source-serif-4-v14-cyrillic_latin-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './source-serif-4/source-serif-4-v14-cyrillic_latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ]
}) 

export const NotoSerifJP = localFont({
    variable: "--font-noto-serif-jp",
    src: [
    {
      path: './noto-serif-jp/noto-serif-jp-v33-japanese_latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './noto-serif-jp/noto-serif-jp-v33-japanese_latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ]
})