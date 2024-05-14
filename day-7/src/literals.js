export function personalForm() {
  return `
    <div class="xl:p-16 p-6">
      <div class="space-y-3">
        <h2 class="font-bold text-3xl text-[--marine-blue]">Personal info</h2>
        <p class="text-[--cool-gray] xl:text-base text-lg">Please provide your name, email address, and phone number.</p>
      </div>
      <div>
        <form class="step--one xl:my-12 my-4 space-y-2">
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
          <div class="bg-white absolute bottom-8 right-24">
              <button class="bg-[--marine-blue] px-6 py-3 rounded-md text-white btn--next">Next Step</button>
            </div>
        </form>
      </div>
    </div>
  `;
}

export function planForm() {
  return `
    <div class="xl:p-16 p-6">
      <div class="space-y-3">
        <h2 class="font-bold text-3xl text-[--marine-blue]">Select your plan</h2>
        <p class="text-[--cool-gray] xl:text-base text-lg">You have the option of monthly or yearly billing.</p>
      </div>
      <div>
        <form class="step--two mt-12">
          <div class="grid grid-cols-3 grid-flow-col gap-x-6">
            <div class="border border-[--purplish-blue] bg-[--alabaster] rounded-lg p-4">
              <img src="/assets/images/icon-arcade.svg" alt="arcade icon" class="w-12 h-12">
              <div class="mt-16 space-y-1">
                <p class="font-semibold text-[--marine-blue]">Arcade</p>
                <p class="text-[--cool-gray]">$9/mo</p>
              </div>
            </div>
            <div class="border border-[--light-gray] rounded-lg p-4">
              <img src="/assets/images/icon-advanced.svg" alt="advanced controller icon" class="w-12 h-12">
              <div class="mt-16 space-y-1">
                <p class="font-semibold text-[--marine-blue]">Advanced</p>
                <p class="text-[--cool-gray]">$12/mo</p>
              </div>
            </div>
            <div class="border border-[--light-gray] rounded-lg p-4">
              <img src="/assets/images/icon-pro.svg" alt="pro controller icon" class="w-12 h-12">
              <div class="mt-16 space-y-1">
                <p class="font-semibold text-[--marine-blue]">Pro</p>
                <p class="text-[--cool-gray]">$15/mo</p>
              </div>
            </div>
          </div>
          <div class="mt-12 bg-[--alabaster] rounded-lg w-full p-4 flex justify-center space-x-6">
            <p class="font-semibold text-[--marine-blue]">Monthly</p>
            <button type="button" class="bg-[--marine-blue] relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer
              rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out" role="switch" aria-checked="false">
              <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-4 w-4 transform
                rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
            </button>
            <p>Yearly</p>
          </div>
          <div class="absolute bottom-8 right-24">
            <button class="bg-[--marine-blue] px-6 py-3 rounded-md text-white btn--next">Next Step</button>
          </div>
          <div class="absolute bottom-11">
            <button class="font-semibold text-[--cool-gray] btn--back">Go Back</button>
          </div>
        </form>
      </div>
    </div>
  `;
}
