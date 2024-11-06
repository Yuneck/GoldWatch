import fetch from 'node-fetch'

const url:string = 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes';
interface IAPIOptions {
	method: string,
	headers: {
		"X-RapidAPI-Key": string,
		"X-RapidAPI-Host": string
	}
}


const options: IAPIOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Key': 'your-rapid-key',
	  'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
	}
  };

  
  fetch(url, options)
	  .then((res) => res.json())
	  .then((res) => console.log(res))
	  .catch((err: any) => console.error('error:' + err));