import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
// import { randomUUID } from "crypto";
import Gun from "gun";


function Create() {
  const db = Gun();

  function fakePosts(opts = { n: 5 }) {

    const posts = [];
    let howMany = opts.n

    while (howMany-- > 0) {
      // let id = randomUUID();
      let count = (opts.n - howMany);
      const post = {
        id: "2305979449898695534",
        timestamp_taken: 1589114193,
        shortcode: "CAAfBeSj_tu",
        caption: "Caption Es Lidah buaya dengan warna merah alami dari buah beet + kurma + gula kelapa",
        display_url: "https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/97279239_1318359048362243_297812134668255924_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=kRUf8qXtZzIAX-8vTuq&oh=972a163f64ce3a29bc91057686c3290d&oe=5EE3890B",
        comment: 2,
        like: 10,
        video_view: 0,
        video_url: "",
        username: "vininta.ayudiana",
        user_id: "5866597887",
        profile_pic_url: "",
        last_update: "2020-05-10T22:29:05Z",
        is_video: false,
        store_display_url: "",
        ai_category: null,
      };
      posts.push(post);
    }

    return posts;
  }

  const posts = fakePosts();
  posts.forEach((p) => {
    db.get(p.id).put(p);
  })

  const postNodes = posts.map(b => db.get(b.uuid))

  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md bg-opacity-70 hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Create
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


export default Create
