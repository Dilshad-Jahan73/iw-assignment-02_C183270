export default function IncomeList(){
    return(
        <div>
        <h2 class="border-b pb-2 font-medium text-green-600">Income</h2>

        <ul id="income-list" class="divide-y">
          <li class="py-2.5">
            <div class="group flex justify-between gap-2 text-sm">
              <span>Website project</span>

              <div>
                <span class="text-green-600">+11,999.99</span>
                <span
                  class="delete-list ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                >
                  Delete
                </span>
              </div>
            </div>
          </li>

          <li class="py-2.5">
            <div class="group flex justify-between gap-2 text-sm">
              <span>Salary</span>
              <div>
                <span class="text-green-600">+35,000.00</span>
                <span
                  class="delete-list ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                >
                  Delete
                </span>
              </div>
            </div>
          </li>

          <li class="py-2.5">
            <div class="group flex justify-between gap-2 text-sm">
              <span>Mobile app project</span>
              <div>
                <span class="text-green-600">+10,000.00</span>
                <span
                  id="incDel"
                  class="delete-list ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                >
                  Delete
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
}