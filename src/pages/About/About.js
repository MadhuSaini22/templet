import React from 'react'
const About = () => {
  return (
    <div className="py-3 px-4">
      <div className="w-full h-full">
        <div className="text-center mt-3 font-serif text-3xl text-gray-600 font-bold">
          <p>About Brts</p>
        </div>
        <div className="text-center mt-3 font-sans text-xl text-gray-500 font-medium">
          <p>Smart Brts Ltd</p>
        </div>
        <div className="ml-2 font-sans text-lg text-gray-600 font-normal leading-9 relative tracking-wide text-justify">
          <p>
            <ul class="list-disc">
              <li>
                Today, we all live in the world of technology and we always like
                to prefer smart system to overcome every little or big problems in
                our day to day life schedules.
              </li>
              <li>
                As we know some issues are faced by
                the travellers while travelling and using the BRTS Buses or using
                BRTS Application.
              </li>
              <li>
                So, the main goal of proposed work is to improve
                the Bus system by adding the necessary additional
                features/functionality into the application, like accurate bus
                timings, correct bus numbers, with there proper locations, feature
                of entry/exit cards during payment, surat-map, near-by bus
                stations and many more such things.
              </li>
              <li>
                This study accepts input in
                the form of selection of source and destination and selection of
                bus travelling the distance to display the entire details about
                the routes and also track the location of the respective bus and
                give the map for the same.
              </li>
              <li>The application is a user friendly one
                that anyone can access for free of cost.
              </li>
              <li>
                The basic idea for this
                project was to guide the bus travellers with the routes, all the
                possible stops that come on their way to the destination and
                moreover, display maps and track their locations and show the
                estimate remaining time required to reach.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
}
export default About;