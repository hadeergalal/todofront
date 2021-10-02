import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // public myRoutes = [
  //   {path:"", key:"home",attr:''},
  //   {path:"user/register", key:"Register", isAuth:false,attr:''},
  //   {path:"user/login", key:"login", isAuth:false,attr:''}]
  

  //   public myLoggedRoutes=[
  //   {path:"", key:"home",attr:''},
     
  //   {path:"user/profile",key:"Profile", isAuth:true,attr:''},

  //   {path:"todo/addtodo", key:"add todo",isAuth:true,attr:''},
    
  //   {path:"todo/mytodos", key:"Show my todos", isAuth:true,attr:''}
  // ]
  public isLoggedIn = localStorage.getItem("TodoAppToken")? true:false
  //public navMenu = localStorage.getItem("TodoAppToken")? this.myLoggedRoutes:this.myRoutes
  
commonUrl="http://localhost:3000/"
  constructor(private _http:HttpClient) { }
  

register(data:any): Observable<any>{
  return this._http.post(this.commonUrl+'User/register',data)

}

login(data:any): Observable<any>{
  return this._http.post(this.commonUrl+'user/login',data)

}

logout(): Observable<any>{
  return this._http.post(this.commonUrl+'user/logout',null)

}

logoutAll(): Observable<any>{
  return this._http.post(this.commonUrl+'user/logoutAll',null)

}

me(): Observable<any>{
  return this._http.post(this.commonUrl+'user/me',null)
}

// uploadImg(file:any):Observable<any>{
//   const formData = new FormData()
//   formData.append('img', file, file.name)
//   return this._http.post(`${this.commonURL}uploadImg`, formData)
// }

addPImg(file:any): Observable<any>{
  const formData=new FormData()
  formData.append('img',file,file.name)
  return this._http.post(this.commonUrl+'user/addPImg',formData)
}

addtodo(data:any):Observable<any>{

return this._http.post(this.commonUrl+'todo/addtodo',data)
}
alltodos(): Observable<any>{
  return this._http.get(this.commonUrl+'todo/alltodos')
}

mytodos(): Observable<any>{
  return this._http.get(this.commonUrl+'todo/mytodos')
}
 singletodo(id:any):Observable<any>{
    
  return this._http.get(`${this.commonUrl}todo/singletodo/${id}`)
  }
  edittodo(id:any, data:any):Observable<any>{
    return this._http.patch(`${this.commonUrl}todo/edittodo/${id}`, data)
  }
  
  deletetodo(id:any):Observable<any>{
    return this._http.delete(`${this.commonUrl}todo/deletetodo/${id}`)
    
  }
 
  

  

}
