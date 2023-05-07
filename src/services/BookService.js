import http from '../http-common';

const EMPLOYEE_API_BASE_URL = "/v1/books"; //"http://localhost:8080/api/v1/books";

class BookService {

    getBooks(){
        return http.get(EMPLOYEE_API_BASE_URL);
    }

    createBook(book){
        return http.post(EMPLOYEE_API_BASE_URL, book);
    }

    getBookById(bookId){
        return http.get(EMPLOYEE_API_BASE_URL + '/' + bookId);
    }

    updateBook(book, bookId){
        book.id = bookId
        return http.put(EMPLOYEE_API_BASE_URL + '/' + bookId, book);
    }

    deleteBook(bookId){
        return http.delete(EMPLOYEE_API_BASE_URL + '/' + bookId);
    }
}

export default new BookService()