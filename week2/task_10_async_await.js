// Create a program that makes an API call and displays all the retrieved data on a web page. Choose a public API (e.g., JSONPlaceholder, OpenWeatherMap) and use the fetch function to make the API request. Also implement error handling

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();
    // eslint-disable-next-line no-use-before-define
    displayUsers(users);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('There has been a problem with your fetch operation:', error);
  }
}

function displayUsers(users) {
  // eslint-disable-next-line no-undef
  const usersDiv = document.getElementById('users');
  let html = '';
  users.forEach((user) => {
    html += `<p>Name: ${user.name}</p>`;
    html += `<p>Email: ${user.email}</p>`;
    html += `<p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>`;
    html += `<p>Phone: ${user.phone}</p>`;
    html += `<p>Website: ${user.website}</p>`;
    html += '<hr>';
  });
  usersDiv.innerHTML = html;
}

fetchUsers();