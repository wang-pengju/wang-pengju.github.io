;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shanchu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M344.4593 791.382c15.4235 0 27.902-12.4795 27.902-27.902V456.558592c0-15.4225-12.4795-27.902-27.902-27.902-15.4225 0-27.902 12.4805-27.902 27.902v306.92249599999997C316.5573 778.9036 329.0368 791.382 344.4593 791.382zM511.872 791.382c15.4235 0 27.902-12.4795 27.902-27.902V456.558592c0-15.4225-12.4795-27.902-27.902-27.902s-27.902 12.4805-27.902 27.902v306.92249599999997C483.969 778.9036 496.4485 791.382 511.872 791.382zM679.2837 791.382c15.4235 0 27.902-12.4795 27.902-27.902V456.558592c0-15.4225-12.4795-27.902-27.902-27.902s-27.902 12.4805-27.902 27.902v306.92249599999997C651.3818 778.9036 663.8602 791.382 679.2837 791.382zM818.7935 149.6361H703.2340479999999c-12.4795-48.0113-55.8039-83.7059-107.6572-83.7059H428.16512000000006c-51.8533 0-95.1777 35.6946-107.6572 83.7059H204.949504c-61.5526 0-111.6078 50.0828-111.6078 111.6078v27.902976h27.901952v27.901952h55.803904v530.138112c0 61.526 50.0552 111.6078 111.6078 111.6078h446.432256c61.5547 0 111.6078-50.0818 111.6078-111.6078V317.047808h55.803904v-27.901952h27.901952v-27.902976C930.4013 199.7179 880.3482 149.6361 818.7935 149.6361zM428.1651 121.7341h167.411712c20.5445 0 38.3652 11.308 48.0389 27.902H380.12723200000005C389.801 133.0422 407.6206 121.7341 428.1651 121.7341zM790.8915 847.1859c0 30.7896-25.0399 55.8039-55.8039 55.8039H288.65536000000003c-30.763 0-59.6726-25.0143-59.6726-55.8039l3.8687-530.1381h558.040064V847.1859199999999zM149.1446 261.2439c0-30.7896 25.0419-55.8039 55.8039-55.8039H818.793472c30.7651 0 55.8039 25.0143 55.8039 55.8039H149.144576z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-down" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M932.505681 339.907527 528.767384 685.676551c-1.358951 1.181919-2.817162 2.199085-4.349051 3.048429-0.095167 0.053212-0.191358 0.100284-0.286526 0.151449-0.265036 0.143263-0.531096 0.284479-0.799202 0.417509-0.185218 0.092098-0.37146 0.174985-0.558725 0.261966-0.182149 0.083911-0.363274 0.171915-0.547469 0.251733-0.25378 0.110517-0.509606 0.211824-0.76441 0.314155-0.121773 0.048095-0.2415 0.100284-0.363274 0.146333-0.300852 0.113587-0.602727 0.220011-0.906649 0.321318-0.081864 0.027629-0.161682 0.058328-0.243547 0.083911-0.328481 0.107447-0.660032 0.205685-0.99056 0.298805-0.061398 0.017396-0.121773 0.036839-0.183172 0.053212-0.336668 0.092098-0.675382 0.174985-1.01512 0.25378-0.061398 0.014326-0.12075 0.029676-0.182149 0.042979-0.329505 0.072655-0.661056 0.137123-0.992607 0.197498-0.074701 0.013303-0.149403 0.028653-0.224104 0.041956-0.311085 0.053212-0.621147 0.098237-0.933255 0.140193-0.100284 0.013303-0.199545 0.028653-0.300852 0.041956-0.279363 0.033769-0.560772 0.060375-0.841158 0.084934-0.1361 0.01228-0.271176 0.026606-0.405229 0.036839-0.242524 0.017396-0.48607 0.027629-0.728594 0.038886-0.176009 0.008186-0.352017 0.01842-0.528026 0.021489-0.201591 0.005117-0.404206 0.004093-0.606821 0.004093-0.216941 0-0.433882 0.001023-0.650823-0.004093-0.159636-0.004093-0.320295-0.014326-0.480954-0.020466-0.258896-0.01228-0.517793-0.022513-0.775666-0.041956-0.118704-0.00921-0.237407-0.021489-0.356111-0.031722-0.297782-0.025583-0.594541-0.054235-0.8913-0.090051-0.084934-0.011256-0.169869-0.023536-0.254803-0.035816-0.326435-0.044002-0.652869-0.090051-0.977257-0.146333-0.061398-0.011256-0.12075-0.023536-0.182149-0.034792-0.345877-0.062422-0.690732-0.128937-1.034563-0.205685-0.047072-0.011256-0.094144-0.022513-0.140193-0.032746-0.353041-0.080841-0.704035-0.167822-1.052982-0.264013-0.052189-0.014326-0.104377-0.029676-0.155543-0.044002-0.339738-0.096191-0.679475-0.196475-1.016143-0.306992-0.073678-0.023536-0.147356-0.051165-0.220011-0.075725-0.312108-0.105401-0.62217-0.212848-0.930185-0.329505-0.11461-0.042979-0.227174-0.092098-0.340761-0.137123-0.26299-0.104377-0.527003-0.208754-0.786922-0.321318-0.178055-0.077771-0.354064-0.163729-0.531096-0.245593-0.192382-0.088004-0.384763-0.173962-0.575098-0.26913-0.267083-0.132006-0.531096-0.273223-0.794086-0.414439-0.096191-0.052189-0.193405-0.100284-0.288572-0.153496-1.531889-0.849344-2.989077-1.865487-4.348028-3.047406L91.493296 339.907527c-10.731412-9.190313-11.980869-25.341155-2.790556-36.071543 5.060249-5.90857 12.228509-8.94165 19.442818-8.94165 5.887081 0 11.805884 2.022053 16.628726 6.152117L511.999488 632.67236 899.22367 301.046451c4.822842-4.130064 10.739599-6.152117 16.628726-6.152117 7.213285 0 14.383592 3.034103 19.442818 8.94165C944.48655 314.567395 943.237093 330.717214 932.505681 339.907527z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-up" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M44.286 696.211l437.91-481.221c8.366-8.421 19.472-12.016 30.432-11.45 10.957-0.562 22.062 3.026 30.427 11.45l437.902 481.221c15.691 15.791 15.691 41.398 0 57.191s-41.13 15.794-56.822 0l-411.51-452.215-411.519 452.215c-15.691 15.791-41.13 15.794-56.822 0-15.686-15.787-15.686-41.398 0-57.191z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 896c-32.768 0-64.669538-2.993231-95.704615-8.073846L192 1024l0-226.540308C75.067077 715.303385 0 589.390769 0 448 0 200.585846 229.218462 0 512 0s512 200.585846 512 448C1024 695.453538 794.781538 896 512 896zM512 64c-247.374769 0-448 171.913846-448 384 0 130.126769 75.697231 244.893538 191.212308 314.368l-2.048 148.401231 150.646154-90.545231c34.697846 7.443692 70.774154 11.776 108.150154 11.776 247.453538 0 448-171.913846 448-384C960 235.953231 759.453538 64 512 64zM768 512c-35.328 0-64-28.632615-64-64S732.672 384 768 384s64 28.672 64 64S803.328 512 768 512zM512 512c-35.288615 0-64-28.632615-64-64S476.711385 384 512 384c35.328 0 64 28.672 64 64S547.328 512 512 512zM256 512c-35.288615 0-64-28.632615-64-64S220.711385 384 256 384c35.328 0 64 28.672 64 64S291.328 512 256 512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M893.456828 709.055005"  ></path>' +
    '' +
    '<path d="M491.889987 337.939709"  ></path>' +
    '' +
    '<path d="M568.154951 338.993714"  ></path>' +
    '' +
    '<path d="M527.32401 876.195699c-3.564175 0-7.119141-0.976234-10.256598-2.928702-16.664541-10.379395-408.355455-256.871345-436.366416-500.994342-8.237615-71.78493 15.535835-136.232754 70.656223-191.560874 37.954427-42.778292 91.974761-66.333778 152.175865-66.333778 77.613682 0 158.166299 39.422871 223.789902 108.884896 65.623603-69.462025 146.176221-108.884896 223.780693-108.884896 60.191894 0 114.212228 23.555485 152.157445 66.333778 55.489802 55.698556 79.396281 120.497375 71.045079 192.603623-28.294416 244.245793-420.09073 489.63769-436.754249 499.970012C534.414499 875.228675 530.869766 876.195699 527.32401 876.195699zM303.534108 153.203264c-49.110511 0-92.960205 19.052938-123.463939 53.650921-0.265036 0.302899-0.549515 0.597611-0.833995 0.881067-47.28084 47.28084-66.893526 99.661837-59.954487 160.109558 23.517623 204.964138 346.068853 425.285033 408.061766 465.865263 62.049195-40.456411 384.695592-259.981173 408.393317-464.888006 7.033184-60.750619-12.71151-113.444748-60.352553-161.085792-0.293689-0.284479-0.568958-0.578168-0.833995-0.8913-30.493501-34.588773-74.333986-53.641711-123.44552-53.641711-72.154343 0-148.346653 40.721447-209.021547 111.710244-3.686972 4.313236-9.080819 6.7968-14.759145 6.7968l0 0c-5.678326 0-11.07115-2.483564-14.759145-6.7968C451.889971 193.924711 375.697661 153.203264 303.534108 153.203264z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhaoxiangji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 288c-124.8 0-224 99.2-224 224s99.2 224 224 224 224-99.2 224-224S636.8 288 512 288zM512 688c-96 0-176-80-176-176s80-176 176-176 176 80 176 176S608 688 512 688zM768 371.2a1.6 1.6 0 1 0 102.4 0 1.6 1.6 0 1 0-102.4 0ZM864 224l-96 0-22.4-67.2c-6.4-16-25.6-28.8-41.6-28.8l-384 0c-19.2 0-35.2 12.8-41.6 28.8l-22.4 67.2-96 0c-54.4 0-96 41.6-96 96l0 448c0 54.4 44.8 96 96 96l704 0c54.4 0 96-41.6 96-96l0-448C960 265.6 918.4 224 864 224zM912 768c0 25.6-22.4 48-48 48l-704 0c-25.6 0-48-22.4-48-48l0-448c0-25.6 22.4-48 48-48l96 0 35.2 0 9.6-32 22.4-64 377.6 0 22.4 64 9.6 32 35.2 0 96 0c25.6 0 48 22.4 48 48L912 768z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-comment-downarrow" viewBox="0 0 2048 1024">' +
    '' +
    '<path d="M36.59977 77.946933a88.31426 88.31426 0 0 1 15.103019-50.172738c22.782519-33.021854 63.22789-37.117587 90.362126-9.471385l806.347588 825.930315L1723.274137 56.316339c27.134236-27.646203 67.579607-23.294486 90.234134 9.85536 22.782519 33.021854 19.198752 82.170659-8.063476 109.816862L989.36984 1005.758626a55.676381 55.676381 0 0 1-82.426642-0.127992l-847.560909-868.039577A85.626434 85.626434 0 0 1 36.59977 77.946933z" fill="#ACB1B7" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-comment-uparrow" viewBox="0 0 2048 1024">' +
    '' +
    '<path d="M1791.897379 946.053164a88.314149 88.314149 0 0 1-15.102999 50.172676c-22.782491 33.021812-63.227811 37.117541-90.362014 9.471373L880.085787 179.76793 105.225121 967.683731c-27.134202 27.646168-67.579523 23.294457-90.234022-9.855347-22.782491-33.021812-19.198728-82.170556 8.063466-109.816725L839.1285 18.242631a55.676311 55.676311 0 0 1 82.426539 0.127992l847.55985 868.038492c14.975008 15.358982 22.782491 37.501516 22.78249 59.644049z" fill="#ACB1B7" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-friendcircle-camera" viewBox="0 0 1344 1024">' +
    '' +
    '<path d="M1152 1024H192c-106.048 0-192-81.536-192-182.08V295.68c0-100.48 85.952-181.952 192-181.952h134.08C354.624 47.04 423.424 0 504 0h336c80.512 0 149.376 47.04 177.92 113.792h134.016C1257.984 113.792 1344 195.2 1344 295.68v546.176C1344 942.464 1257.984 1024 1152 1024zM672 227.584c-185.6 0-336 142.592-336 318.528S486.4 864.64 672 864.64c185.472 0 335.936-142.72 335.936-318.592 0-176-150.4-318.528-336-318.528z m0 546.048c-132.544 0-240-101.824-240-227.52 0-125.696 107.456-227.584 240-227.584 132.48 0 240 101.888 240 227.584s-107.52 227.52-240 227.52z" fill="#FFFFFF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-massage" viewBox="0 0 1137 1024">' +
    '' +
    '<path d="M247.295313 1024a34.645237 34.645237 0 0 1-15.928845-3.868434 29.695918 29.695918 0 0 1-16.611509-26.168816v-176.070622l-1.592884-1.080886a534.867848 534.867848 0 0 1-88.177533-71.110913 461.140052 461.140052 0 0 1-67.128703-85.16243 402.203327 402.203327 0 0 1-42.837214-96.483288A375.63629 375.63629 0 0 1 0 458.924236C0 397.086186 15.018625 337.011686 44.600765 280.464288c28.615032-54.613182 69.631807-103.708156 121.855662-145.862706A589.708584 589.708584 0 0 1 347.305702 36.127189 683.973211 683.973211 0 0 1 568.887309 0.002844c76.856675 0 151.437802 12.174188 221.581606 36.124345 67.754478 23.153713 128.62542 56.319844 180.906165 98.417504 52.166966 42.211438 93.183741 91.306413 121.741884 145.919595 29.639029 56.547398 44.657654 116.621898 44.657653 178.459948a381.382052 381.382052 0 0 1-44.600765 178.516838c-28.615032 54.613182-69.631807 103.708156-121.855661 145.862706a589.651695 589.651695 0 0 1-180.849276 98.474393 683.973211 683.973211 0 0 1-221.581606 36.124344c-34.702126 0-69.518029-2.730659-106.438816-8.305755l-1.422218-0.170666-196.835009 110.193472a34.53146 34.53146 0 0 1-16.895953 4.380432zM839.677668 527.588934c-37.20523 0-67.413146-29.58214-67.413147-66.047816 0-36.522565 30.207916-66.104705 67.413147-66.104705s67.356257 29.58214 67.356257 66.104705c0 36.465676-30.151027 66.047817-67.356257 66.047816z m-269.709473 0c-37.148341 0-67.413146-29.58214-67.413147-66.047816 0-36.522565 30.264805-66.104705 67.413147-66.104705 37.20523 0 67.356257 29.58214 67.356257 66.104705 0 36.465676-30.151027 66.047817-67.356257 66.047816z m-269.083697 0c-37.148341 0-67.356257-29.58214-67.356258-66.047816 0-36.522565 30.207916-66.104705 67.356258-66.104705 37.20523 0 67.413146 29.58214 67.413146 66.104705 0 36.465676-30.207916 66.047817-67.413146 66.047816z" fill="#FFFFFF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-state-delete" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M936.357647 234.917647H87.642353C72.463059 234.917647 60.235294 224.135529 60.235294 210.823529c0-13.251765 12.227765-24.094118 27.407059-24.094117h848.715294c15.179294 0 27.407059 10.842353 27.407059 24.094117 0 13.312-12.227765 24.094118-27.407059 24.094118zM662.588235 138.541176H361.411765c-15.119059 0-27.407059-10.782118-27.407059-24.094117 0-13.251765 12.288-24.094118 27.407059-24.094118h301.17647c15.119059 0 27.407059 10.842353 27.407059 24.094118 0 13.312-12.288 24.094118-27.407059 24.094117zM388.818824 764.988235V355.388235c0-13.251765 12.227765-24.094118 27.346823-24.094117s27.407059 10.842353 27.407059 24.094117v409.6c0 13.312-12.288 24.094118-27.407059 24.094118s-27.346824-10.782118-27.346823-24.094118z m191.60847 0V355.388235c0-13.251765 12.288-24.094118 27.407059-24.094117s27.346824 10.842353 27.346823 24.094117v409.6c0 13.312-12.227765 24.094118-27.346823 24.094118s-27.407059-10.782118-27.407059-24.094118zM197.150118 307.2c15.119059 0 27.346824 10.842353 27.346823 24.094118v505.97647c0 26.624 24.576 48.188235 54.814118 48.188236h465.438117c30.177882 0 54.753882-21.564235 54.753883-48.188236V331.294118c0-13.251765 12.227765-24.094118 27.346823-24.094118 15.179294 0 27.407059 10.842353 27.407059 24.094118v530.070588c0 39.936-36.743529 72.282353-82.160941 72.282353H251.904c-45.357176 0-82.160941-32.346353-82.160941-72.282353V331.294118c0-13.251765 12.227765-24.094118 27.407059-24.094118z" fill="#80858C" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-state-thumbs-up" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 933.647059a25.901176 25.901176 0 0 1-12.167529-3.011765 1385.351529 1385.351529 0 0 1-232.809412-166.128941c-68.005647-60.054588-122.277647-121.554824-161.310118-182.512941C55.416471 503.988706 30.117647 426.104471 30.117647 350.750118 30.117647 207.450353 149.805176 90.352941 296.417882 90.352941c49.694118 0 102.460235 18.371765 148.600471 51.07953 26.925176 19.335529 50.236235 42.646588 66.981647 67.463529a274.552471 274.552471 0 0 1 66.981647-67.463529c46.140235-33.249882 98.906353-51.079529 148.600471-51.07953 146.612706 0 266.300235 116.555294 266.300235 260.457412 0 75.354353-25.359059 153.238588-75.053177 231.122823-39.092706 61.018353-93.364706 122.518588-161.310117 182.512942-115.169882 101.737412-228.291765 163.237647-232.809412 166.249411a29.635765 29.635765 0 0 1-12.709647 2.95153zM296.417882 139.986824c-118.663529 0-215.582118 94.689882-215.582117 210.823529 0 150.768941 119.265882 287.683765 219.136 375.988706A1408.301176 1408.301176 0 0 0 512 880.037647a1371.979294 1371.979294 0 0 0 212.028235-153.298823c99.930353-88.304941 219.136-225.219765 219.136-375.988706 0-116.133647-96.918588-210.823529-215.642353-210.82353-86.136471 0-170.405647 69.391059-191.668706 131.915294a25.6 25.6 0 0 1-23.853176 16.865883 25.118118 25.118118 0 0 1-23.853176-16.865883c-21.263059-62.524235-105.472-131.915294-191.728942-131.915294z" fill="#80858C" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)