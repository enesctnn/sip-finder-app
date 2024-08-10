'use client';

import { Cocktail } from '@/@types/api/TheCocktailsDbResponseTypes';
import { useMutation } from '@tanstack/react-query';
import { useContext, useEffect, useState } from 'react';
import { useUserContext } from '../user-context/UserContextProvider';
import {
  SavedCocktailsContext,
  SavedCocktailsSetterContext,
  SavedCocktailsStatusContext,
} from './savedCocktailsContext';

export function SavedCocktailsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [savedCocktails, setSavedCocktails] = useState<Cocktail[]>([]);

  const user = useUserContext();

  const { mutate: fetchSavedCocktails, status } = useMutation({
    mutationFn: () =>
      fetch('/api/cocktails/saved', {
        method: 'POST',
        body: JSON.stringify({ user_email: user?.email }),
      }),
    onSuccess: async res => {
      const data = await res.json();
      setSavedCocktails(data);
    },
  });

  useEffect(() => {
    fetchSavedCocktails();
  }, [fetchSavedCocktails, user?.email]);

  return (
    <SavedCocktailsContext.Provider value={savedCocktails}>
      <SavedCocktailsSetterContext.Provider value={fetchSavedCocktails}>
        <SavedCocktailsStatusContext.Provider value={status}>
          {children}
        </SavedCocktailsStatusContext.Provider>
      </SavedCocktailsSetterContext.Provider>
    </SavedCocktailsContext.Provider>
  );
}

export function useSavedCocktailsContext() {
  const context = useContext(SavedCocktailsContext);
  if (context === undefined) {
    throw new Error(
      'useSavedCocktailsContext must be used within a SavedCocktailsContextProvider'
    );
  }
  return context;
}

export function useSavedCocktailsSetterContext() {
  const context = useContext(SavedCocktailsSetterContext);
  if (context === undefined) {
    throw new Error(
      'useSavedCocktailsSetterContext must be used within a SavedCocktailsSetterContextProvider'
    );
  }
  return context;
}

export function useSavedCocktailsStatusContext() {
  const context = useContext(SavedCocktailsStatusContext);
  if (context === undefined) {
    throw new Error(
      'useSavedCocktailsStatusContext must be used within a SavedCocktailsStatusContextProvider'
    );
  }
  return context;
}
