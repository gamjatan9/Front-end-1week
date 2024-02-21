/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react'

type PageContextType = {
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export const PageContext = createContext<PageContextType | undefined>(undefined)

export default function PageContextProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState(() => {
    const localCurrentPage = localStorage.getItem('currentPage')

    return localCurrentPage ? Number.parseInt(JSON.parse(localCurrentPage), 10) : 1
  })

  return <PageContext.Provider value={{ currentPage, setCurrentPage }}>{children}</PageContext.Provider>
}

export const usePageContext = () => {
  const context = useContext(PageContext)

  if (context === undefined) {
    throw new Error('context is not defined')
  }

  return context
}
