// ES6 classes
class GitHub {
  constructor() {
    this.client_id = 'a24f44eb98168135f92c';  // property
    this.client_secret = 'c35915ab509d9e50e9107f565d521a3ddc67863a';
    this.repos_count = 5; // max 5 repository on profile
    this.repos_sort = 'created: asc'; // sort by latest ones first
  }

  async getUser(user) {
    // Profile
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // Repos
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}
