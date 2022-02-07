import { ChatAltIcon, ChatIcon, DotsHorizontalIcon, GiftIcon, LinkIcon, ReplyIcon, ThumbDownIcon, ThumbUpIcon, UploadIcon } from "@heroicons/react/outline";
import UserCircleIcon from "@heroicons/react/outline/UserCircleIcon";
import Gun from "gun";


function ListCard({ data }: { data: any }) {



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


  return (
    <div className="text-white shadow-lg backdrop-blur-l bg-opacity-30 bg-neutral-600 rounded-md mt-5 flex flex-col items-center">
      <div className="flex p-2 justify-between m-5 ">
        <UserCircleIcon className="w-20 h-20 mr-2" />
        <div>
          <p>
            <span className="mr-1 font-semibold text-lg">{data.name}</span>
            {/* <span className=" font-light text-ellipsis text-stone-200 italic ">{data.name.toLowerCase().split(' ').splice(2, 3).join('')}</span> */}
            <span className="font-light text-ellipsis text-stone-200 italic "> - created date</span>
          </p>
          <p>{data.description.split('').splice(0, 100)}</p>
        </div>
      </div>
      <div className="w-[30rem] h-auto bg-slate-600">
        <img src={data.imageUrl} alt="content" className="w-full h-auto" />
      </div>
      <div className="flex w-full justify-between space-x-1 py-4 px-4  ">
        <button className="listPostBtn">
          <ThumbUpIcon className="w-7 h-7" />
          <span className="text-sm pl-1">10 mil</span>
        </button>
        <button className="listPostBtn">
          <ThumbDownIcon className="w-7 h-7" />
          <span className="text-sm pl-1">54</span>
        </button>
        <button className="listPostBtn">
          <GiftIcon className="w-7 h-7" />
          <span className="text-sm pl-1"> 54</span>
        </button>
        <button className="listPostBtn">
          <UploadIcon className="w-7 h-7" />
          <span className="text-sm pl-1"> 43</span>
        </button>
        <button className="listPostBtn">
          <ChatAltIcon className="w-7 h-7" />
          <span className="text-sm pl-1">423</span>
        </button>
        <button className="listPostBtn">
          <ReplyIcon className="w-7 h-7" />
          <span className="text-sm pl-1"> 994</span>
        </button>
        <button className="listPostBtn">
          <DotsHorizontalIcon className="w-7 h-7 rotate-90" />
        </button>


      </div>
    </div>
  )
}

export default ListCard;
