import { beforeEach, expect, test } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SideBar from '../components/SideBar';
import fs from 'fs';
import path from 'path';

const sidebar = fs
  .readFileSync(path.resolve(__dirname, '../components/SideBar.jsx'), 'utf8')
  .replaceAll(/(?:\r\n|\r|\n| )/g, '');
const products = fs
  .readFileSync(path.resolve(__dirname, '../components/Products.jsx'), 'utf8')
  .replaceAll(/(?:\r\n|\r|\n| )/g, '');

const app = fs
  .readFileSync(path.resolve(__dirname, '../App.jsx'), 'utf8')
  .replaceAll(/(?:\r\n|\r|\n| )/g, '');

/*
beforeEach(() => {
  dom = render(<SideBar />);
  document = dom.container;
});

 test("4 categori de SideBar'da görünüyor.", async () => {
  await screen.findByText('electronics');
  await screen.findByText('jewelery');
  await screen.findByText("men's clothing");
  await screen.findByText("women's clothing");
}); */

test("ADIM 1.1: App'de category isimli state tanımlanmış", () => {
  expect(app.includes('const[category,setCategory]=useState(')).toBe(true);
});

test("ADIM 1.2: App'de category isimli state tanımlanmış", () => {
  expect(
    app.includes("const[category,setCategory]=useState('electronics')")
  ).toBe(true);
});

test("ADIM 2: App'de handleCatChange fonksiyonu tanımlanmış", () => {
  expect(
    app.includes('functionhandleCatChange') ||
      app.includes('consthandleCatChange=(') ||
      app.includes('consthandleCatChange=function')
  ).toBe(true);
});

test("ADIM 3.1: App'de SideBar'a prop olarak handleCatChange gönderiliyor", () => {
  const sideBar = app.split('<SideBar')[1].split('<Products')[0];
  expect(sideBar.includes('handleCatChange')).toBe(true);
});

test("ADIM 3.2: App'de SideBar'a prop olarak category gönderiliyor", () => {
  const sideBar = app.split('<SideBar')[1].split('<Products')[0];
  expect(sideBar.includes('category')).toBe(true);
});

test("ADIM 3.2: App'de SideBar'a prop olarak category gönderiliyor", () => {
  const products = app.split('<Products')[1];
  expect(products.includes('category')).toBe(true);
});

test("ADIM 4.1: SideBar'da App'den gelen category destruct ediliyor", () => {
  const part = sidebar.split('return')[0];
  expect(part.includes('category')).toBe(true);
});

test("ADIM 4.2: SideBar'da App'den gelen handleCatChange destruct ediliyor", () => {
  const part = sidebar.split('return')[0];
  expect(part.includes('handleCatChange')).toBe(true);
});

test("ADIM 5: Products'da App'den gelen category destruct ediliyor", () => {
  const part = products.split('return')[0];
  expect(part.includes('{category}')).toBe(true);
});

test("ADIM 6.1: Products useEffect'de axios import edilmiş ve kullanılmış.", () => {
  expect(products.includes('axios.get(')).toBe(true);
  expect(products.includes('importaxiosfrom')).toBe(true);
});

test("ADIM 6.2: Products useEffect'de axios doğru adrese istek atıyor.", () => {
  expect(products.includes('axios.get(')).toBe(true);
  expect(products.includes('importaxiosfrom')).toBe(true);
  expect(products.includes('https://fakestoreapi.com/products/category')).toBe(
    true
  );
  const parts = products.split('useEffect(')[1];
  expect(
    parts.includes('https://fakestoreapi.com/products/category/jewellery')
  ).not.toBe(true);
});

test("ADIM 6.3: Products axios isteğinde hata mesajı .catch ile yakalanıp console'a bastırılıyor. ", () => {
  const parts = products.split('useEffect(')[1];
  expect(parts.includes('.catch(')).toBe(true);
});

test("ADIM 6.4: Products useEffect sadece category prop'unu dinliyor.", () => {
  const parts = products.split('useEffect(')[1];
  expect(parts.includes(',[category]')).toBe(true);
});
