import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
	moduleId: module.id,
	selector: 'user',
	//template: ``,
	templateUrl:'user.component.html',
	providers:[PostsService],
})
export class UserComponent  {

	//instance Vairiable
	name: string;
	email: string;
	address: address;
	hobbies: string[];
	showHobbies: boolean;
	posts: Post[];


	//constructor
	constructor(private postsService: PostsService){
		console.log('User Created');

		this.name = 'Shofiullah Babor';
		this.email = 'babu_12@yahoo.com';
		this.address = {
			div: 'Chittagong',
			city: 'Feni',
			thana: 'Feni Sadar'
		};
		this.hobbies = ['Traveling', 'Programming', 'Pera Jumping'];
		this.showHobbies = false;
		this.postsService.getPosts().subscribe(posts => { 
			this.posts = posts;
			console.log(posts);
		});
	}

	toggleHobbies(){
		this.showHobbies = !this.showHobbies;
	}

	addHobby(h){
		//console.log(hobby);
		this.hobbies.push(h);
	}

	deleteHobby(i){
		this.hobbies.splice(i, 1);
	}
}

interface address{
	div: string;
	city: string;
	thana: string;
}

interface Post{
	userId: number;
	id: number;
	title: string;
	body: string;
}

//50 min 22 sec done