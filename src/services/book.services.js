import {db} from "../firebase-confix";
import {createContext, useContext} from "react";
import {collection,getDocs,getDoc,addDoc,updateDoc,doc,deleteDoc} from "firebase/firestore"

const userBookContext = createContext();
const bookCollectionRef = collection(db, "books");
export function UserBookContextProvider({children}){
    function addBooks(newBook){
        return addDoc(bookCollectionRef,newBook);
    }
    function updateBook(id,updatedBook){
        const bookDoc = doc(db, "books", id);
        return updateDoc(bookDoc, updatedBook);
    }
    function deleteBook(id){
        const bookDoc = doc(db, "books", id);
        return deleteDoc(bookDoc);
    }
    function getAllBooks(){
        return getDocs(bookCollectionRef);
    }
    function getBook(id){
        const bookDoc = doc(db, "books", id);
        return getDoc(bookDoc);
    }
    return (
        <userBookContext.Provider value={{addBooks,updateBook,deleteBook,getAllBooks,getBook}}>
            {children}
        </userBookContext.Provider>
    );
}
export function useUserBook() {
    return useContext(userBookContext);
  }