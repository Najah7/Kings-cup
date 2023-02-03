import './globals.css'
import Head from './components/Head/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {<Head title='Kings cup'/>}
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
