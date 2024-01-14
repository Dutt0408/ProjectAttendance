
export class CollegeService {

    getColleges() {
        return fetch('data/colleges.json').then(res => res.json())
            .then(d => d.data);
    }
}
     