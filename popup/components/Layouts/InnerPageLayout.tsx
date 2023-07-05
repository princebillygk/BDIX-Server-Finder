import { useNavigate } from "react-router-dom"

export interface InnerPageLayoutProps {
  children: React.JSX.Element
  title: string
}
export default function InnerPageLayout({
  children,
  title
}: InnerPageLayoutProps) {
  const navigate = useNavigate()
  return (
    <div className="page">
      <header>
        <button onClick={() => navigate(-1)}>Back</button>
        <h2>{title}</h2>
      </header>
      {children}
    </div>
  )
}
