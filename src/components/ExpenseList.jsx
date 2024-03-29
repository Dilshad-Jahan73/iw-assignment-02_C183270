export default function ExpenseList(){
    return(
        <div>
        <h2 class="border-b pb-2 font-medium text-red-600">Expense</h2>

        <ul id="expense-list" class="divide-y">
          <li class="py-2.5">
            <div class="group flex justify-between gap-2 text-sm">
              <span>Groceries 1</span>
              <div>
                <span class="text-red-600">-2,500.00</span>
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
              <span>Electricity Bill</span>
              <div>
                <span class="text-red-600">-2,500.00</span>
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
              <span>House rent</span>
              <div>
                <span class="text-red-600">-2,500.00</span>
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
              <span>Phone bill</span>
              <div>
                <span class="text-red-600">-2,500.00</span>
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
              <span>1 Week Travel</span>
              <div>
                <span class="text-red-600">-2,500.00</span>
                <span
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