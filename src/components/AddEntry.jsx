import AddButton from "./AddButton";
import EntryValue from "./EntryValue";
import EntryDescription from "./EntryDescription";
import EntryType from "./EntryType";

export default function AddEntry(){
    return(
        <div class="border-b bg-gray-100 py-3">
        <div class="mx-auto max-w-xl px-5">
          <form class="flex gap-2">
            {/* EntryType  */}
            <EntryType />
  
           {/* EntryDescription  */}
            <EntryDescription />
  
           {/* EntryValue  */}
            <EntryValue />

            {/* AddButton  */}
            <AddButton />
          </form>
        </div>
      </div>
  
    );
}