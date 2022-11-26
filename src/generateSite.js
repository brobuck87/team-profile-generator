// Create a function to generate site
function generateSite(data) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Employee Roster</title>
      <!-- //Tailwind// -->
      <script src="https://cdn.tailwindcss.com"></script>
      <!-- //Flowbite// -->
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css"
      />
    </head>
  
    <body>

<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>

      <script src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js"></script>
    </body>
  </html>`;
}
module.exports = generateSite;
