document.addEventListener("DOMContentLoaded", () => {
  const itineraryData = [
    {
      id: "day-1",
      day: "Day 1",
      title: "Airport Pick Up",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 22 5 22 3.5a2.5 2.5 0 0 0-2.5-2.5c-1.5 0-2.5 1-3.5 2.5L13 8 4.8 6.2c-.4-.1-.9-.1-1.3.1L2 7l3.3 4.6c.4.5.6 1.1.5 1.7l-.3 1.4c-.2.8-.4 1.6-.5 2.4l-1 5.2c-.2.9-.1 1.8.2 2.5.5.7 1.3 1 2.1.8L8 22c.8-.1 1.6-.4 2.4-.5l1.4-.3c.6-.1 1.2.1 1.7.5L17 22l1.2-1.3c.3-.4.4-.9.2-1.3Z"/></svg>`,
      description:
        "Upon arrival at Dubai International Airport, you will be greeted by our representative and transferred to your luxurious hotel. Spend the rest of the day at leisure, perhaps exploring the vibrant surroundings or relaxing by the pool.",
    },
    {
      id: "day-2",
      day: "Day 2",
      title: "Dubai City Tour + Burj Khalifa Visit",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="8"/><line x1="12" x2="12" y1="2" y2="4"/><line x1="12" x2="12" y1="20" y2="22"/><line x1="4.22" x2="5.64" y1="4.22" y2="5.64"/><line x1="18.36" x2="19.78" y1="18.36" y2="19.78"/><line x1="2" x2="4" y1="12" y2="12"/><line x1="20" x2="22" y1="12" y2="12"/><line x1="4.22" x2="5.64" y1="19.78" y2="18.36"/><line x1="18.36" x2="19.78" y1="5.64" y2="4.22"/></svg>`,
      description:
        "Embark on a captivating city tour, visiting iconic landmarks like the Dubai Museum, Jumeirah Mosque, and the stunning Burj Al Arab. In the afternoon, ascend to the observation deck of the Burj Khalifa for breathtaking panoramic views of the city.",
    },
    {
      id: "day-3",
      day: "Day 3",
      title: "Desert Safari (Dhow Cruise)",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car"><path d="M19 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2Z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>`,
      description:
        "Enjoy a thrilling desert safari with dune bashing, camel rides, henna painting, and a BBQ dinner under the stars with live belly dancing and Tanoura performances.",
    },
    {
      id: "day-4",
      day: "Day 4",
      title: "Miracle Garden",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2l-4 4V2"/><path d="M17 20v2"/><path d="M17 10h3c.6 0 1 .4 1 1v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3c0-.6.4-1 1-1Z"/></svg>`,
      description:
        "Discover the enchanting Dubai Miracle Garden, a floral paradise with intricate designs and millions of blooming flowers. Later, visit the Global Village, a multicultural festival park offering entertainment, shopping, and dining from around the world.",
    },
    {
      id: "day-5",
      day: "Day 5",
      title: "Global Village",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag"><path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5Z"/><path d="M3 7h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
      description:
        "Spend another exciting day at Global Village, exploring different country pavilions, enjoying thrilling rides, and experiencing live cultural shows. It's a perfect blend of entertainment and global culture.",
    },
    {
      id: "day-6",
      day: "Day 6",
      title: "Marina Dinner Cruise",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ship"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H2v12Z"/><path d="M12 10v12"/><path d="M12 10H7.5l-3.75 3.75L3 17h18l-1.5-3.75L16.5 10H12Z"/><path d="M7.5 10a2.5 2.5 0 0 0 0 5"/></svg>`,
      description:
        "In the evening, embark on a luxurious Dhow Cruise along the Dubai Marina. Enjoy a delicious buffet dinner with stunning views of the illuminated skyline and live entertainment.",
    },
    {
      id: "day-7",
      day: "Day 7",
      title: "Shopping & Departure",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.5Z"/><circle cx="12" cy="13" r="3"/></svg>`,
      description:
        "Enjoy some last-minute souvenir shopping at a local market or mall. Depending on your flight schedule, you will be transferred to Dubai International Airport for your departure, carrying unforgettable memories of your Dubai adventure.",
    },
  ]

  const itineraryList = document.getElementById("itinerary-list")
  let openDayId = null

  function renderItinerary() {
    itineraryList.innerHTML = "" // Clear existing content

    itineraryData.forEach((item, index) => {
      const itineraryItem = document.createElement("div")
      itineraryItem.classList.add("itinerary-item")
      itineraryItem.dataset.id = item.id

      const isActive = openDayId === item.id
      if (isActive) {
        itineraryItem.classList.add("active")
      }

      // Determine if the line should be solid
      const openDayIndex = itineraryData.findIndex((d) => d.id === openDayId)
      const isLineSolid = openDayIndex !== -1 && index <= openDayIndex
      if (isLineSolid) {
        itineraryItem.classList.add("solid-line")
      }

      itineraryItem.innerHTML = `
                <div class="line"></div>
                <div class="itinerary-item-content">
                    <button class="itinerary-icon-wrapper" aria-expanded="${isActive}" aria-controls="content-${item.id}">
                        ${item.icon}
                    </button>
                    <div class="itinerary-text-wrapper">
                        <button class="itinerary-title-button" aria-expanded="${isActive}" aria-controls="content-${item.id}">
                            ${item.day}: ${item.title}
                        </button>
                        ${item.description ? `<div id="content-${item.id}" class="itinerary-description">${item.description}</div>` : ""}
                    </div>
                </div>
            `

      itineraryList.appendChild(itineraryItem)

      // Add event listeners to the buttons
      const iconButton = itineraryItem.querySelector(".itinerary-icon-wrapper")
      const titleButton = itineraryItem.querySelector(".itinerary-title-button")

      const toggleDay = () => {
        if (openDayId === item.id) {
          openDayId = null // Close if already open
        } else {
          openDayId = item.id // Open this day
        }
        renderItinerary() // Re-render to update states and lines
      }

      iconButton.addEventListener("click", toggleDay)
      titleButton.addEventListener("click", toggleDay)
    })
  }

  renderItinerary() // Initial render
})
