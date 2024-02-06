import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { SearchBooksForm } from "@/modules/SearchBooks";
import { Container } from "@/layout";
import axios, { AxiosResponse } from "axios";

interface HomePageProps {}

const API_KEY = "AIzaSyBnf12TWzSIYjQcpYXVLlkIdMIfez3lCwg";

interface IVolumeInfo {
  authors: string;
  categories: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  pageCount: number;
  publisher: string;
  title: string;
  description: string;
}

interface IBookItem {
  id: string;
  volumeInfo: IVolumeInfo;
}

export const HomePage: FC<HomePageProps> = () => {
  const [searchValue, setSearchValue] = useState("");
  const [books, setBooks] = useState<IBookItem[]>([]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = await getBooks();
    setBooks(data.items);
  };

  const getBooks = async () => {
    const response: AxiosResponse<{
      totalItems: number;
      items: IBookItem[];
    }> = await axios.get(`https://www.googleapis.com/books/v1/volumes`, {
      params: {
        q: searchValue,
        key: API_KEY,
      },
    });

    return response.data;
  };

  return (
    <Container>
      <form
        onSubmit={onFormSubmit}
        className="py-4 flex justify-center items-center gap-2"
      >
        <input
          type="text"
          className="border-2 px-4 py-2 rounded-3xl outline-0"
          placeholder="Введите название книги"
          value={searchValue}
          onChange={onInputChange}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-3xl bg-amber-400 text-white hover:bg-amber-700 disabled:bg-gray-100 disabled:text-gray-500"
          disabled={!searchValue}
        >
          Поиск
        </button>
      </form>
      <div className="mt-4 flex flex-col gap-6">
        {!!books.length &&
          books.map((book) => {
            const {
              authors,
              title,
              imageLinks,
              pageCount,
              publisher,
              description,
              categories,
            } = book.volumeInfo;
            return (
              <div key={book.id} className="flex gap-2 items-start">
                <img
                  src={imageLinks.thumbnail}
                  alt="Илюсрация книги"
                  className="shrink-0"
                  width={250}
                />
                <div className="flex flex-col gap-4">
                  <span>Название: {title}</span>
                  <span>Автор: {authors}</span>
                  <span>Категория: {categories}</span>
                  <span>Издатель: {publisher}</span>
                  <span>Кол-во страниц: {pageCount}</span>
                  <span>{description}</span>
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
};
