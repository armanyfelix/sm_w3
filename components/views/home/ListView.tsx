import { ChatIcon, DotsHorizontalIcon, GiftIcon, LinkIcon, ReplyIcon, ThumbDownIcon, ThumbUpIcon } from "@heroicons/react/outline";
import UserCircleIcon from "@heroicons/react/outline/UserCircleIcon";
import Gun from "gun";


function ListView({ data }: { data: any }) {



  const db = Gun();

  function fakePosts(opts = { n: 5 }) {

    const posts = [];
    let howMany = opts.n;

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


  return (
    <div className="text-white mt-10 flex flex-col items-center max-w-xl ">
      <div className="flex p-2 ">
        <UserCircleIcon className="w-16 h-16 mr-2" />
        <div>
          <p>
            <span className="mr-1 font-semibold text-lg">{data.name}</span>
            <span className=" font-light text-ellipsis text-stone-200 italic ">{data.name.toLowerCase().split(' ').splice(2, 3).join('')}</span>
          </p>
          <p>{data.description.split('').splice(0, 100)}</p>
        </div>
      </div>
      <div className="">
        <img src={data.imageUrl} alt="content" className="w-[28rem] h-[34rem]" />
      </div>
      <div className="flex  w-full  justify-evenly m-2 ">
        <button className=" inline-flex items-center ">
          <ThumbUpIcon className="w-7 h-7" />
          <span className="text-sm">10 mil</span>
        </button>
        <button className=" inline-flex items-center ">
          <ThumbDownIcon className="w-7 h-7" />
          <span className="text-sm">54</span>
        </button>
        <button className=" ">
          <GiftIcon className="w-7 h-7" />
        </button>
        <button className=" inline-flex items-center ">
          <ChatIcon className="w-7 h-7" />
          <span className="text-sm">423</span>
        </button>
        <button className=" inline-flex items-center ">
          <img src="https://img.icons8.com/external-outline-juicy-fish/28/FFFFFF/external-share-arrows-outline-outline-juicy-fish.png" />
          <span className="text-sm">994</span>
        </button>
        <button className=" inline-flex items-center ">
          <DotsHorizontalIcon className="w-7 h-7" />
        </button>

      </div>
    </div>
  )
}

export default ListView
