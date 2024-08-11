'use client';

import { Cocktail } from '@/@types/api/TheCocktailsDbResponseTypes';
import { useMutation } from '@tanstack/react-query';
import { useContext, useEffect, useState } from 'react';
import { useUserContext } from '../user-context/UserContextProvider';
import {
  SavedCocktailAdditionContext,
  SavedCocktailRemovalContext,
  SavedCocktailsContext,
  SavedCocktailsRevalidateContext,
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
    mutationFn: async () => {
      const res = await fetch('/api/cocktails/saved', {
        method: 'POST',
        body: JSON.stringify({ user_email: user?.email }),
      });
      if (!res.ok) {
        throw new Error('Failed to fetch saved cocktails');
      }
      return res.json();
    },
    onSuccess: data => {
      setSavedCocktails(data);
    },
  });

  useEffect(() => {
    if (user?.email) {
      fetchSavedCocktails();
    }
  }, [fetchSavedCocktails, user?.email]);

  const removeSavedCocktailById = (cocktailId: string) => {
    setSavedCocktails(prevCocktail =>
      prevCocktail.filter(cocktail => cocktail.idDrink !== cocktailId)
    );
  };

  const addToSavedCocktails = (cocktails: Cocktail[]) => {
    setSavedCocktails(prevCocktails => {
      const existingCocktailsIds = new Set(
        prevCocktails.map(cocktail => cocktail.strDrink)
      );
      const newCocktails = cocktails.filter(
        cocktail => !existingCocktailsIds.has(cocktail.strDrink)
      );

      return [...prevCocktails, ...newCocktails];
    });
  };

  return (
    <SavedCocktailsContext.Provider value={savedCocktails}>
      <SavedCocktailsRevalidateContext.Provider value={fetchSavedCocktails}>
        <SavedCocktailRemovalContext.Provider value={removeSavedCocktailById}>
          <SavedCocktailAdditionContext.Provider value={addToSavedCocktails}>
            <SavedCocktailsStatusContext.Provider value={status}>
              {children}
            </SavedCocktailsStatusContext.Provider>
          </SavedCocktailAdditionContext.Provider>
        </SavedCocktailRemovalContext.Provider>
      </SavedCocktailsRevalidateContext.Provider>
    </SavedCocktailsContext.Provider>
  );
}

export function useSavedCocktailsContext() {
  const context = useContext(SavedCocktailsContext);
  if (context === undefined) {
    throw new Error(
      'useSavedCocktails must be used within a SavedCocktailsProvider'
    );
  }
  return context;
}

export function useSavedCocktailsRevalidateContext() {
  const context = useContext(SavedCocktailsRevalidateContext);
  if (context === undefined) {
    throw new Error(
      'useSavedCocktailsRevalidate must be used within a SavedCocktailsContextProvider'
    );
  }
  return context;
}

export function useSavedCocktailRemovalContext() {
  const context = useContext(SavedCocktailRemovalContext);
  if (context === undefined) {
    throw new Error(
      'useSavedCocktailRemoval must be used within a SavedCocktailsContextProvider'
    );
  }
  return context;
}

export function useSavedCocktailAdditionContext() {
  const context = useContext(SavedCocktailAdditionContext);
  if (context === undefined) {
    throw new Error(
      'useSavedCocktailAddition must be used within a SavedCocktailsContextProvider'
    );
  }
  return context;
}

export function useSavedCocktailsStatusContext() {
  const context = useContext(SavedCocktailsStatusContext);
  if (context === undefined) {
    throw new Error(
      'useSavedCocktailsStatus must be used within a SavedCocktailsContextProvider'
    );
  }
  return context;
}
