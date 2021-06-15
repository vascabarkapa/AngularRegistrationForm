import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModule } from '../user.module';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public getUsers() {
    return this.http.get(apiUrl + "/users");
  }

  public deleteUser(id: number) {
    return this.http.delete(apiUrl + "/users/" + id);
  }

  public getUser(id: number) {
    return this.http.get(apiUrl + "/users/" + id);
  }

  public addUser(user: UserModule) {
    return this.http.post(apiUrl + "/users", user);
  }
  
  public getOneUser(id: number) {
    return this.http.get(apiUrl + "/users/" + id);
  }

  public editOneUser(user: UserModule, id: number) {
    return this.http.put(apiUrl + "/users/" + id, user);
  }
}
