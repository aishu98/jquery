describe("testing animations", function() {
  beforeEach(function() {
    document.body.innerHTML =
      '<div class="product_box" id="item1" onmouseover="hover1()"></div> <div id="item1-des" class="des">Some Description 1</div><div class="product_box" id="item2" onmouseover="hover2()"></div><div id="item2-des" class="des">Some Description 2</div><button class="buy" id="buy" onmouseover="animate_big()">BUY</button>';
  });
  afterEach(function() {});
  it("Testing animations function call", function() {
     spyOn($.fn, "slideToggle");
    $("#item1").trigger("mouseover");
    expect($.fn.slideToggle).toHaveBeenCalled();
  });

  it("Testing animations function call 2", function() {
     spyOn($.fn, "slideToggle");
    $("#item2").trigger("mouseover");
    expect($.fn.slideToggle).toHaveBeenCalled();
  });
});


describe("testing button animate", function() {
  beforeEach(function() {
    document.body.innerHTML =
      '<div class="product_box" id="item1" onmouseover="hover1()"></div> <div id="item1-des" class="des">Some Description 1</div><div class="product_box" id="item2" onmouseover="hover2()"></div><div id="item2-des" class="des">Some Description 2</div><button class="buy" id="buy" onmouseover="animate_big()" onmouseout="animate_small()">BUY</button>';
    jasmine.clock().install();
    $.fx.off = true;
  });
  afterEach(function() {});
  it("animate the element", function() {
    spyOn($.fn, "animate");
    $("#buy").trigger("mouseover");
    expect($.fn.animate).toHaveBeenCalled();
     $("#buy").trigger("onmouseout");
     expect($.fn.animate).toHaveBeenCalled();
  });
});