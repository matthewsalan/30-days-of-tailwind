export function formBody() {
  console.log("here");
  return `
    <div class="xl:p-16 p-6">
      <div class="space-y-3">
        <h2 class="font-bold text-3xl text-[--marine-blue]">Personal info</h2>
        <p class="text-[--cool-gray] xl:text-base text-lg">Please provide your name, email address, and phone number.</p>
      </div>
      <div>
        <form class="form xl:my-12 my-4 space-y-2">
          <div class="space-y-1">
            <label for="name" class="text-sm text-[--marine-blue]">Name</label>
            <input type="text" name="name" placeholder="e.g. Stephen King"
              class="border border-[--light-gray] p-3 rounded-lg w-full pl-4">
          </div>
          <div class="space-y-1">
            <label for="email" class="text-sm text-[--marine-blue]">Email Address</label>
            <input type="email" name="email" placeholder="e.g. stephenking@lorem.com"
              class="border border-[--light-gray] p-3 rounded-lg w-full pl-4">
          </div>
          <div class="space-y-1">
            <label for="phone" class="text-sm text-[--marine-blue]">Phone Number</label>
            <input type="number" name="phone" placeholder="e.g. +1 234 567 890"
              class="border border-[--light-gray] p-3 rounded-lg w-full pl-4">
          </div>
        </form>
      </div>
    </div>
  `;
}
