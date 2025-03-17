interface Address {
  id: string
  label: string
  address: string
  network: string
  category: string
}

const STORAGE_KEY = 'walbook_addresses'

export const storage = {
  getAddresses: (): Address[] => {
    if (typeof window === 'undefined') return []
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  },

  saveAddress: (address: Address): void => {
    if (typeof window === 'undefined') return
    const addresses = storage.getAddresses()
    addresses.push(address)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(addresses))
  },

  updateAddress: (address: Address): void => {
    if (typeof window === 'undefined') return
    const addresses = storage.getAddresses()
    const index = addresses.findIndex(a => a.id === address.id)
    if (index !== -1) {
      addresses[index] = address
      localStorage.setItem(STORAGE_KEY, JSON.stringify(addresses))
    }
  },

  deleteAddress: (id: string): void => {
    if (typeof window === 'undefined') return
    const addresses = storage.getAddresses()
    const filtered = addresses.filter(a => a.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  },

  clearAddresses: (): void => {
    if (typeof window === 'undefined') return
    localStorage.removeItem(STORAGE_KEY)
  }
} 