'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Calendar, Activity, User } from 'lucide-react'

export function BottomNavbar() {
  const pathname = usePathname()

  // Não mostrar navbar na página de auth
  if (pathname === '/auth') {
    return null
  }

  const navItems = [
    {
      href: '/',
      icon: Home,
      label: 'Hoje',
      isActive: pathname === '/'
    },
    {
      href: '/ciclo',
      icon: Calendar,
      label: 'Ciclo',
      isActive: pathname === '/ciclo'
    },
    {
      href: '/saude',
      icon: Activity,
      label: 'Saúde',
      isActive: pathname === '/saude'
    },
    {
      href: '/perfil',
      icon: User,
      label: 'Perfil',
      isActive: pathname === '/perfil' || pathname.startsWith('/perfil/')
    }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 shadow-lg z-50">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors min-h-[44px] min-w-[44px] justify-center ${
                item.isActive
                  ? 'text-[#F25D8E]'
                  : 'text-gray-500 hover:text-[#F25D8E]'
              }`}
              prefetch={false}
            >
              <Icon className={`w-6 h-6 ${item.isActive ? 'fill-current' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}