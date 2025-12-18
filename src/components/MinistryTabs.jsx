import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MINISTRY_TABS } from '../constants/ministries'

function getDisplayName(name) {
  return name.includes(' - ') ? name.split(' - ')[1] : name
}

export default function MinistryTabs({ activeId }) {
  const navigate = useNavigate()
  const location = useLocation()

  const resolvedActiveId = useMemo(() => {
    if (activeId) return activeId
    const found = MINISTRY_TABS.find((m) => m.route === location.pathname)
    return found?.id
  }, [activeId, location.pathname])

  return (
    <section className="bg-white pt-24 pb-4">
      <div className="container mx-auto px-4 md:px-[100px]">
        <div className="overflow-x-auto">
          <div className="w-full flex justify-center">
            <div className="flex items-center gap-4 md:gap-6 py-2 min-w-max">
              {MINISTRY_TABS.map((ministry) => {
                const displayName = getDisplayName(ministry.name)
                const isActive = resolvedActiveId === ministry.id

                return (
                  <button
                    key={ministry.id}
                    type="button"
                    onClick={() => navigate(ministry.route)}
                    className={`whitespace-nowrap font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                      isActive
                        ? 'bg-primary text-white px-4 md:px-5 py-2 rounded-full'
                        : 'text-gray-700 hover:text-black px-2 py-2'
                    }`}
                  >
                    {displayName}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


