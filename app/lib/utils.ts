import {useLocation, useMatches} from '@remix-run/react';
import type {
  MenuItem,
  Menu,
  MoneyV2,
} from '@shopify/hydrogen/storefront-api-types';


export interface EnhancedMenuItem extends MenuItem {
  to: string;
  target: string;
  isExternal?: boolean;
  items: EnhancedMenuItem[];
}

export interface EnhancedMenu extends Menu {
  items: EnhancedMenuItem[];
}

export function missingClass(string?: string, prefix?: string) {
  if (!string) {
    return true;
  }

  const regex = new RegExp(` ?${prefix}`, 'g');
  return string.match(regex) === null;
}

