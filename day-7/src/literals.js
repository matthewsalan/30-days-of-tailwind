export function personalForm() {
  return `
    <div class="xl:p-16 py-8 px-4">
      <div class="space-y-2 md:space-y-3">
        <h2 class="font-bold md:text-3xl text-2xl text-[--marine-blue]">Personal info</h2>
        <p class="text-[--cool-gray] xl:text-base text-sm">Please provide your name, email address, and phone number.</p>
      </div>
      <div>
        <form class="step--one xl:my-12 my-4 space-y-2">
          <div class="space-y-1">
            <label for="name" class="text-sm text-[--marine-blue]">Name</label>
            <input type="text" name="name" placeholder="e.g. Stephen King"
              class="border border-[--light-gray] p-3 rounded-lg w-full pl-4 text-sm focus:outline-[--purplish-blue]">
          </div>
          <div class="space-y-1">
            <label for="email" class="text-sm text-[--marine-blue]">Email Address</label>
            <input type="email" name="email" placeholder="e.g. stephenking@lorem.com"
              class="border border-[--light-gray] p-3 rounded-lg w-full pl-4 text-sm focus:outline-[--purplish-blue]">
          </div>
          <div class="space-y-1">
            <label for="phone" class="text-sm text-[--marine-blue]">Phone Number</label>
            <input type="text" name="phone" placeholder="e.g. +1 234 567 890"
              class="border border-[--light-gray] p-3 rounded-lg w-full pl-4 text-sm focus:outline-[--purplish-blue]">
          </div>
          <div class="bg-white absolute bottom-8 right-24 hidden xl:block">
            <button type="button" class="bg-[--marine-blue] px-6 py-3 rounded-md text-white hover:bg-[--purplish-blue] btn--next">
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

export function planForm(planInfo) {
  return `
    <div class="xl:p-16 py-8 px-4">
      <div class="space-y-2 md:space-y-3">
        <h2 class="font-bold md:text-3xl text-2xl text-[--marine-blue]">Select your plan</h2>
        <p class="text-[--cool-gray] xl:text-base text-sm">You have the option of monthly or yearly billing.</p>
      </div>
      <div>
        <form class="step--two md:mt-12 mt-4">
          <div class="md:grid md:grid-cols-3 md:grid-flow-col grid grid-flow-row md:gap-x-6 gap-y-3">
            <div class="border ${
              planInfo[1].level === "Arcade"
                ? "border-[--purplish-blue] bg-[--alabaster]"
                : "border-[--light-gray]"
            }
              ${planInfo[1].level === "Arcade" ? "current--plan" : ""}
              rounded-lg p-4 flex md:block hover:cursor-pointer hover:bg-[--alabaster]
              hover:border-[--purplish-blue] btn--arcade">
              <img src="/assets/images/icon-arcade.svg" alt="arcade icon" class="md:w-12 md:h-12 w-10 h-10">
              <div class="ml-4 md:ml-0 md:mt-16 md:space-y-1">
                <p class="font-semibold text-[--marine-blue] md:text-base text-sm label--plan">Arcade</p>
                <p class="text-[--cool-gray] md:text-base text-sm">$${
                  planInfo[0].costs[0]
                }/${planInfo[1].type}</p>
                <p class="${
                  planInfo[0].type === "yr" ? "block" : "hidden"
                } text-sm text-[--marine-blue]">2 months free</p>
              </div>
            </div>
            <div class="border ${
              planInfo[1].level === "Advanced"
                ? "border-[--purplish-blue] bg-[--alabaster]"
                : "border-[--light-gray]"
            }
            ${planInfo[1].level === "Advanced" ? "current--plan" : ""}
              rounded-lg p-4 flex md:block hover:cursor-pointer hover:bg-[--alabaster]
              hover:border-[--purplish-blue] btn--advanced">
              <img src="/assets/images/icon-advanced.svg" alt="advanced controller icon" class="md:w-12 md:h-12 w-10 h-10">
              <div class="ml-4 md:ml-0 md:mt-16 md:space-y-1">
                <p class="font-semibold text-[--marine-blue] md:text-base text-sm label--plan">Advanced</p>
                <p class="text-[--cool-gray] md:text-base text-sm">$${
                  planInfo[0].costs[1]
                }/${planInfo[1].type}</p>
                <p class="${
                  planInfo[0].type === "yr" ? "block" : "hidden"
                } text-sm text-[--marine-blue]">2 months free</p>
              </div>
            </div>
            <div class="border ${
              planInfo[1].level === "Pro"
                ? "border-[--purplish-blue] bg-[--alabaster]"
                : "border-[--light-gray]"
            }
            ${planInfo[1].level === "Pro" ? "current--plan" : ""}
              rounded-lg p-4 flex md:block hover:cursor-pointer hover:bg-[--alabaster]
              hover:border-[--purplish-blue] btn--pro">
              <img src="/assets/images/icon-pro.svg" alt="pro controller icon" class="md:w-12 md:h-12 w-10 h-10">
              <div class="ml-4 md:ml-0 md:mt-16 md:space-y-1">
                <p class="font-semibold text-[--marine-blue] md:text-base text-sm label--plan">Pro</p>
                <p class="text-[--cool-gray] md:text-base text-sm">$${
                  planInfo[0].costs[2]
                }/${planInfo[1].type}</p>
                <p class="${
                  planInfo[0].type === "yr" ? "block" : "hidden"
                } text-sm text-[--marine-blue]">2 months free</p>
              </div>
            </div>
          </div>
          <div class="md:mt-12 mt-4 bg-[--alabaster] border border-[--light-gray] rounded-lg w-full p-4 flex justify-center space-x-6">
            <p class="${
              planInfo[0].type === "mo"
                ? `text-[--marine-blue]`
                : `text-[--cool-gray]`
            } font-semibold md:text-base text-sm label--monthly">Monthly</p>
            <button type="button" class="plan--toggle bg-[--marine-blue] relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer
              rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out" role="switch">
              <span aria-hidden="true" class="plan--slider pointer-events-none inline-block h-4 w-4 transform
                rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  planInfo[0].type === "yr" ? "translate-x-5" : ""
                }"></span>
            </button>
            <p class="font-semibold md:text-base text-sm ${
              planInfo[0].type === "yr"
                ? `text-[--marine-blue]`
                : `text-[--cool-gray]`
            } label--yearly">Yearly</p>
          </div>
          <div class="hidden xl:block">
            <div class="absolute bottom-8 right-24">
              <button type="button" class="bg-[--marine-blue] px-6 py-3 rounded-md text-white hover:bg-[--purplish-blue] btn--next">
                Next Step
              </button>
            </div>
            <div class="absolute bottom-11">
              <button type="button" class="font-semibold text-[--cool-gray] hover:text-[--marine-blue] btn--back">Go Back</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}

export function addOnsForm() {
  return `
    <div class="xl:p-16 py-8 px-4">
      <div class="space-y-1 md:space-y-3">
        <h2 class="font-bold md:text-3xl text-2xl text-[--marine-blue]">Pick add-ons</h2>
        <p class="text-[--cool-gray] md:text-base text-sm">Add-ons help enhance your gaming experience.</p>
      </div>
      <div>
        <form class="step--three md:mt-12 mt-4">
          <div class="grid md:gap-y-6 gap-y-4">
            <div class="border border-[--light-gray] rounded-lg md:p-4 p-3 flex items-center hover:cursor-pointer hover:bg-[--alabaster]
              hover:border-[--purplish-blue]">
              <div class="flex h-6 items-center">
                <input id="online-service" name="online-service" type="checkbox" class="md:h-5 md:w-5 h-4 w-4">
              </div>
              <div class="flex flex-col md:ml-6 ml-4">
                <p class="font-semibold text-[--marine-blue] md:text-base text-sm">Online service</p>
                <p class="text-[--cool-gray] md:text-base text-sm">Access to multiplayer games</p>
              </div>
              <div class="flex ml-auto">
                <p class="text-[--purplish-blue] md:text-base text-sm">+$1/mo</p>
              </div>
            </div>
            <div class="border border-[--light-gray] rounded-lg md:p-4 p-3 flex items-center hover:cursor-pointer hover:bg-[--alabaster]
              hover:border-[--purplish-blue]">
              <div class="flex h-6 items-center">
                <input id="online-service" name="online-service" type="checkbox" class="md:h-5 md:w-5 h-4 w-4">
              </div>
              <div class="flex flex-col md:ml-6 ml-4">
                <p class="font-semibold text-[--marine-blue] md:text-base text-sm">Larger storage</p>
                <p class="text-[--cool-gray] md:text-base text-sm">Extra 1TB of cloud save</p>
              </div>
              <div class="flex ml-auto">
                <p class="text-[--purplish-blue] md:text-base text-sm">+$2/mo</p>
              </div>
            </div>
            <div class="border border-[--light-gray] rounded-lg md:p-4 p-3 flex items-center hover:cursor-pointer hover:bg-[--alabaster]
              hover:border-[--purplish-blue]">
              <div class="flex h-6 items-center">
                <input id="online-service" name="online-service" type="checkbox" class="md:h-5 md:w-5 h-4 w-4">
              </div>
              <div class="flex flex-col md:ml-6 ml-4">
                <p class="font-semibold text-[--marine-blue] md:text-base text-sm">Customizable profile</p>
                <p class="text-[--cool-gray] md:text-base text-sm">Custom theme on your profile</p>
              </div>
              <div class="flex ml-auto">
                <p class="text-[--purplish-blue] md:text-base text-sm">+$2/mo</p>
              </div>
            </div>
          </div>
          <div class="hidden xl:block">
            <div class="absolute bottom-8 right-24">
              <button type="button" class="bg-[--marine-blue] px-6 py-3 rounded-md text-white hover:bg-[--purplish-blue] btn--next">
                Next Step
              </button>
            </div>
            <div class="absolute bottom-11">
              <button type="button" class="font-semibold text-[--cool-gray] hover:text-[--marine-blue] btn--back">
                Go Back
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}

export function summaryForm() {
  return `
    <div class="xl:p-16 py-8 px-4">
      <div class="space-y-2 md:space-y-3">
        <h2 class="font-bold md:text-3xl text-2xl text-[--marine-blue]">Finishing up</h2>
        <p class="text-[--cool-gray] xl:text-base text-sm">Double-check everything looks OK before confirming.</p>
      </div>
      <div class="bg-[--alabaster] border border-[--light-gray] rounded-lg p-6 md:mt-12 mt-4">
        <div class="grid row-auto gap-y-6">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-[--marine-blue] font-semibold">Arcade (Monthly)</p>
              <button type="button" class="underline text-sm text-[--cool-gray]">Change</button>
            </div>
            <p class="text-[--marine-blue] font-semibold">$9/mo</p>
          </div>
          <div class="border-t border-t-[--light-gray]"></div>
          <div class="flex justify-between items-center">
            <p class="text-[--cool-gray]">Online service</p>
            <p class="text-[--marine-blue]">$1/mo</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-[--cool-gray]">Larger storage</p>
            <p class="text-[--marine-blue]">$2/mo</p>
          </div>
        </div>
      </div>
      <div class="flex items-start justify-between p-6">
        <p class="text-[--cool-gray]">Total (per month)</p>
        <p class="text-[--purplish-blue] font-semibold text-lg">+$12/mo</p>
      </div>
      <div class="hidden xl:block">
        <div class="absolute bottom-8 right-24">
          <button type="button" class="bg-[--marine-blue] px-6 py-3 rounded-md text-white hover:bg-[--purplish-blue] btn--next">
            Next Step
          </button>
        </div>
        <div class="absolute bottom-11">
          <button type="button" class="font-semibold text-[--cool-gray] hover:text-[--marine-blue] btn--back">
            Go Back
          </button>
        </div>
      </div>
    </div>
  `;
}

export function thankYouForm() {
  return `
    <div class="xl:p-16 py-8 px-4 xl:mt-[20%]">
      <div class="grid justify-center justify-items-center text-center space-y-6">
        <div>
          <img src="/assets/images/icon-thank-you.svg" alt="" class="">
        </div>
        <div>
          <p class="text-3xl text-[--marine-blue] font-bold">Thank you!</p>
        </div>
        <div>
          <p class="text-[--cool-gray]">
            Thanks for confirming your subscription! We hope you have fun
            using our platform. If you ever need support, please feel free
            to email us at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  `;
}
