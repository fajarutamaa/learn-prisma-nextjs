import { prisma } from '../lib/prisma'

export const getContacts = async () => {
  try {
    const getContacts = await prisma.contact.findMany()
    return getContacts
  } catch (error) {
    throw new Error('failed fetch contact data')
  }
}

export const getContactsById = async (id: string) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id },
    })
    return contact
  } catch (error) {
    throw new Error('failed fetch contact data')
  }
}
