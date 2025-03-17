"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Copy, QrCode, Trash2 } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"
import { storage } from "@/lib/storage"
import { v4 as uuidv4 } from 'uuid'

// Types
interface Address {
  id: string
  label: string
  address: string
  network: string
  category: string
}

const networks = {
  ethereum: "Ethereum",
  bitcoin: "Bitcoin",
  solana: "Solana",
  polygon: "Polygon",
  arbitrum: "Arbitrum",
  optimism: "Optimism",
} as const

const categories = {
  personal: "Personal",
  exchange: "Exchange",
  defi: "DeFi",
  gaming: "Gaming",
  nft: "NFT",
  other: "Other",
} as const

type NetworkType = keyof typeof networks
type CategoryType = keyof typeof categories

const networkOptions = Object.entries(networks).map(([value, label]) => ({ value, label }))
const categoryOptions = Object.entries(categories).map(([value, label]) => ({ value, label }))

export default function AddressesPage() {
  // State
  const [addresses, setAddresses] = useState<Address[]>([])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newAddress, setNewAddress] = useState<Omit<Address, 'id'>>({
    label: "",
    address: "",
    network: "",
    category: "",
  })
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedNetwork, setSelectedNetwork] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [showQRDialog, setShowQRDialog] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null)

  // Load addresses from local storage on mount
  useEffect(() => {
    const storedAddresses = storage.getAddresses()
    setAddresses(storedAddresses)
  }, [])

  // Handle adding new address
  const handleAddAddress = () => {
    const addressWithId = {
      ...newAddress,
      id: uuidv4(),
    }
    storage.saveAddress(addressWithId)
    setAddresses(prev => [...prev, addressWithId])
    setNewAddress({
      label: "",
      address: "",
      network: "",
      category: "",
    })
    setIsAddDialogOpen(false)
  }

  // Handle deleting address
  const handleDeleteAddress = (id: string) => {
    storage.deleteAddress(id)
    setAddresses(prev => prev.filter(addr => addr.id !== id))
  }

  // Handle network change
  const handleNetworkChange = (value: string) => {
    setNewAddress(prev => ({
      ...prev,
      network: value
    }))
  }

  // Handle category change
  const handleCategoryChange = (value: string) => {
    setNewAddress(prev => ({
      ...prev,
      category: value
    }))
  }

  // Filter addresses based on search term and filters
  const filteredAddresses = addresses.filter(addr => {
    const matchesSearch = searchTerm === "" ||
      addr.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      addr.address.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesNetwork = selectedNetwork === "" || addr.network === selectedNetwork
    const matchesCategory = selectedCategory === "" || addr.category === selectedCategory

    return matchesSearch && matchesNetwork && matchesCategory
  })

  // Copy address to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handleShowQR = (address: Address) => {
    setSelectedAddress(address)
    setShowQRDialog(true)
  }

  return (
    <div className="container mx-auto py-8 max-w-7xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Wallet Addresses</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your blockchain addresses securely
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Address
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Address</DialogTitle>
              <DialogDescription>
                Add a new wallet address to your address book
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="label">Label</Label>
                <Input
                  id="label"
                  value={newAddress.label}
                  onChange={(e) => setNewAddress(prev => ({
                    ...prev,
                    label: e.target.value
                  }))}
                  placeholder="My Main Wallet"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="network">Network</Label>
                <select
                  id="network"
                  value={newAddress.network}
                  onChange={(e) => handleNetworkChange(e.target.value)}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="" disabled>Select network</option>
                  {networkOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  value={newAddress.category}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="" disabled>Select category</option>
                  {categoryOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={newAddress.address}
                  onChange={(e) => setNewAddress(prev => ({
                    ...prev,
                    address: e.target.value
                  }))}
                  placeholder="Enter wallet address"
                />
              </div>
              <Button onClick={handleAddAddress} className="mt-4">Add Address</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search addresses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              value={selectedNetwork}
              onChange={(e) => setSelectedNetwork(e.target.value)}
              className="flex h-10 w-48 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">All Networks</option>
              {networkOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex h-10 w-48 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">All Categories</option>
              {categoryOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Addresses Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Label</TableHead>
              <TableHead>Network</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Address</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAddresses.map((addr) => (
              <TableRow key={addr.id}>
                <TableCell className="font-medium">{addr.label}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{networks[addr.network as NetworkType]}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{categories[addr.category as CategoryType]}</Badge>
                </TableCell>
                <TableCell className="font-mono text-sm">{addr.address}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShowQR(addr)}
                    >
                      <QrCode className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(addr.address)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteAddress(addr.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filteredAddresses.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                  No addresses found. Add your first address to get started.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* QR Code Dialog */}
      <Dialog open={showQRDialog} onOpenChange={setShowQRDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>QR Code for {selectedAddress?.label}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg">
            {selectedAddress && (
              <>
                <div className="bg-white p-4 rounded-lg">
                  <QRCodeSVG
                    value={selectedAddress.address}
                    size={200}
                    level="H"
                    includeMargin
                    className="w-full h-full"
                  />
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 font-mono break-all text-center">
                  {selectedAddress.address}
                </p>
                <Button
                  className="mt-4"
                  variant="outline"
                  onClick={() => copyToClipboard(selectedAddress.address)}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Address
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
} 