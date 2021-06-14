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

  deleteUser(id: number) {
    return this.http.delete(apiUrl + "/users/" + id);
  }

  updateUser(user: UserModule) {
    return this.http.put(apiUrl + "/users/" + user.id, user);
  }

  getUser(id: number) {
    return this.http.get(apiUrl + "/users/" + id);
  }

  addUser(user: UserModule) {
    return this.http.post(apiUrl + "/users", user);
  }
}
