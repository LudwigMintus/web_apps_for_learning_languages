const BASE_URL = 'http://localhost:3000'; // Убедитесь, что базовый URL совпадает с вашим

// Общая функция для обработки запросов
async function fetchRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'User-Agent': 'insomnia/10.3.0',
  };

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}),
    },
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error ${response.status}: ${errorText}`);
  }

  return response.json();
}

// Типы данных
export interface User {
  id: string;
  email: string;
  password?: string;
}

export interface Collection {
  id: string;
  name: string;
  tags: string[];
  cards: Card[];
}

export interface Card {
  id: string;
  message: string;
  language: string;
  translation: string;
  example: string;
  synonims: string[];
}

// API функции
export const getUserCollections = async (userId: string): Promise<Collection[]> =>
  fetchRequest<Collection[]>(`/progress/user/${userId}`);

export const addCollectionToUser = async (
  userId: string,
  collectionId: string
): Promise<void> =>
  fetchRequest<void>(`/progress/user/${userId}/collection/${collectionId}`, {
    method: 'POST',
  });

export const resetCollectionProgress = async (collectionId: string): Promise<void> =>
  fetchRequest<void>(`/progress/${collectionId}/reset`, {
    method: 'POST',
  });

export const setCollectionProgress = async (collectionId: string): Promise<void> =>
  fetchRequest<void>(`/progress/${collectionId}/complete`, {
    method: 'POST',
  });

export const deleteCollectionFromUser = async (collectionId: string): Promise<void> =>
  fetchRequest<void>(`/progress/${collectionId}`, {
    method: 'DELETE',
  });

export const getLanguages = async (): Promise<string[]> =>
  fetchRequest<string[]>('/types/langs');

export const getTags = async (): Promise<string[]> =>
  fetchRequest<string[]>('/types/tags');

export const getCollections = async (): Promise<Collection[]> =>
  fetchRequest<Collection[]>('/collections');

export const addCollection = async (collectionData: Omit<Collection, 'id'>): Promise<Collection> =>
  fetchRequest<Collection>('/collections', {
    method: 'POST',
    body: JSON.stringify(collectionData),
  });

export const deleteCollection = async (collectionId: string): Promise<void> =>
  fetchRequest<void>(`/collections/${collectionId}`, {
    method: 'DELETE',
  });

export const getCards = async (): Promise<Card[]> =>
  fetchRequest<Card[]>('/cards');

export const addCard = async (cardData: Omit<Card, 'id'>): Promise<Card> =>
  fetchRequest<Card>('/cards', {
    method: 'POST',
    body: JSON.stringify(cardData),
  });

export const deleteCard = async (cardId: string): Promise<void> =>
  fetchRequest<void>(`/cards/${cardId}`, {
    method: 'DELETE',
  });

export const getUsers = async (): Promise<User[]> =>
  fetchRequest<User[]>('/users');

export const addUser = async (userData: Omit<User, 'id'>): Promise<User> =>
  fetchRequest<User>('/users', {
    method: 'POST',
    body: JSON.stringify(userData),
  });

export const deleteUser = async (userId: string): Promise<void> =>
  fetchRequest<void>(`/users/${userId}`, {
    method: 'DELETE',
  });
