@extends('layouts.default')
@section('style')
<link href="{{ asset('assets/css/sparken_custom_styles.css') }}" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/sweetalert.min.css') }}">
<style type="text/css">
div#preview img {padding: 10px;}
#sigformclass{display:none;}
.layout-container #view{width:100% !important;}
</style>
<script type="text/javascript">
$('#formselectid').on('change', function() {
    if ( $('#formselectid').val() == 'formclass' ){
   	$('#sigformid').hide();
    	$('#sigformclass').show();  	    	
    }else {
	$('#sigformid').show();
    	$('#sigformclass').hide();	
    }
});
</script>
@stop
@section('content')

<!-- Content -->
<div class="layout-content" data-scrollable>
    <div class="container-fluid">
        <div class="Formbox">
            @include('includes.alert')
            <ol class="breadcrumb">
                <li><a href="{{ url('/') }}">Home</a></li>
                @if ( isset($campaignsData) )
                <li class="active">{!! $title = "Update Ads" !!}</li>
                @else
                <li class="active">{!! $title = "Add Ads" !!}</li>
                @endif
            </ol>
            <a href="{{ url('/campaigns/view-campaigns') }}"><button class="btn btn-primary waves-effect waves-light" id="navigate">View Ads</button></a>
            <div class="card">
                <form @if(isset($campaignsData)) action="{{ url('/campaigns/update') }}" @else action="{{ url('/campaigns/store') }}" @endif data-parsley-validate novalidate method="POST" id="myform" name="myform" enctype="multipart/form-data">
                    {{ csrf_field() }}
                    @if(isset($campaignsData))
                    <input type="hidden" name="id" value="{{ $campaignsData->id }}">
                    @endif
                    @if ( isset($campaignsData) )
                    <h5>Update Ads</h5>
                    @else
                    <h5>Add Ads</h5>
                    @endif
                    <fieldset>
                        <legend>Ads Details:</legend>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="formLabel">Campaign Name</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" name="campaign_name" parsley-trigger="change" required placeholder="Campaign Name" class="form-control" id="campaign_name" @if ( isset($campaignsData) && !empty($campaignsData->campaign_name)) value="{{ $campaignsData->campaign_name }}" @endif>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="formLabel">Campaign Title</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" name="campaign_title" parsley-trigger="change" required placeholder="Campaign Title" class="form-control" id="campaign_title" @if ( isset($campaignsData) && !empty($campaignsData->campaign_title)) value="{{ $campaignsData->campaign_title }}" @endif>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="formLabel">Select Ads Category</label>
                                </div>
                                <div class="col-md-8">
                                    <select name="campaign_category" data-placeholder="Select Ads Category" class="form-control" id="campaign_category">
                                        @if ( isset($categoryData) && count($categoryData) > 0 )
                                        <option value="">Select Ads Category</option>
                                        @foreach ($categoryData as $value)
                                        @if ( isset($campaignsData) && $campaignsData->campaign_category == $value->id )
                                        <option value="{{ $value->id }}" selected>{{ $value->category_name }}</option>
                                        @else
                                        <option value="{{ $value->id }}">{{ $value->category_name }}</option>
                                        @endif
                                        @endforeach
                                        @endif
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="formLabel">Campaign`s Description</label>
                                </div>    
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <textarea name="campaign_description" required placeholder="Campaign Description" class="form-control" id="campaign_description" >@if( isset($campaignsData) && !empty($campaignsData->campaign_description)){{$campaignsData->campaign_description }}@endif</textarea>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="formLabel">Ad Landing page URL</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="url" name="campaign_url" parsley-trigger="change" required placeholder="Ad Landing page URL" class="form-control" id="campaign_url" title="" @if ( isset($campaignsData) && !empty($campaignsData->campaign_url)) value="{{ $campaignsData->campaign_url }}" @endif>
                                </div>
                            </div>
                        </div>
                        <!--  -->
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="formLabel">Ad Success page URL</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="url" parsley-trigger="change" required placeholder="Ad Success page URL" class="form-control" id="campaign_success_url" name="campaign_success_url" title="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="formLabel" >Success element selector</label>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" name="selector" required placeholder="e.g button#signup-button" class="form-control" id="adbirt-selector" title="selector"  @if ( isset($campaignsData) && !empty($campaignsData->selector)) value="{{ $campaignsData->selector }}" @endif >
                                    <br />
                                    <span id="adbirt-loader" class="bg-primary text-white p-2"></span>
                                </div>
                                <div class="col-md-2">
                                    <button type="button" class="btn btn-primiary btn-small" id="adbirt-get-selector" title="get selector" >Get Selector</button>
                                </div>
                                
                                {!! Html::script('dist/js/css-selector-generator.js') !!} 

                                <script>
                                (() => {
    const successpage = document.querySelector("#campaign_success_url");
    const selectorBtn = document.querySelector("#adbirt-get-selector");
    const selectorInput = document.querySelector("#adbirt-selector");
    const loader = document.querySelector("#adbirt-loader");

    selectorBtn.onclick = async (event) => {
        event.preventDefault();

        try {
            loader.innerHTML = "Rendering, please wait...";

            if (
                successpage.value.indexOf("https://") != 0 &&
                successpage.value.indexOf("http://") != 0
            ) {
                successpage.value = "https://" + successpage.value;
            }

            const html = await (
                await fetch(
                     `https://us-central1-adbirt-e0cd0.cloudfunctions.net/ssr?url=${encodeURIComponent(
                      successpage.value
                    )}&noCacheToken=${Math.random()}`, 
                    /*`http://localhost:5001/adbirt-e0cd0/us-central1/ssr?url=${
        encodeURIComponent(successpage.value)
      }&noCacheToken=${Math.random()}`,*/ {
                        mode: "cors",
                    }
                )
            ).text();
            loader.innerHTML = "";

            const win = window.open(
                "",
                "Adbirt - Click on the element you want us to track"
            );

            win.document.querySelector("html").innerHTML = html;

const infoModal = win.document.createElement('div');
infoModal.id = 'adbirt-info-modal-backscrim';
infoModal.innerHTML = `<style>
    html,
    body {
        width: 100% !important;
        background-color: #000000A8;
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
    }

    #adbirt-info-modal-backscrim {
        width: 100% !important;
        height: 100% !important;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        z-index: 999999999;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        flex-direction: column !important;
    }

    #adbirt-info-modal-body {
        padding: 16px !important;
        box-shadow: 0px 2px 4px 4px;
        background-color: #fff;
        border-radius: 5px !important;
        max-width: 400px !important;
        word-wrap: break-word !important;
    }

    #adbirt-info-modal-text {
        text-align: center !important;
        line-height: 30px !important;
        font-size: 16px !important;
        font-weight: 500 !important;
    }
    #adbirt-info-modal-close-button {
        padding: 8px !important;
        border-radius: 5px !important;
        background-color: #ff0000;
        color: #ffffff;
    }
</style>
<div id="adbirt-info-modal-body">
    <center>
        <img src="https://adbirt.com/public/images/logo.png" alt="Adbirt Logo" />
    </center>
    <hr />
    <div id="adbirt-info-modal-text-holder">
        <p id="adbirt-info-modal-text">
            Please wait for the page to load, then navigate to the success page and right-click on an element to get it's selector. <br /> For this to work, Cross-origin resource sharing (CORS) must be enabled on your site/server, atleast temporarily. <a href='https://adbirt.com/blog/enable-cors'>Learn how</a>
        </p>
    </div>
    <hr />
    <center>
        <button
            onclick="document.querySelector('#adbirt-info-modal-backscrim').remove()"
            id="adbirt-info-modal-close-button"
        >
            Ok, Proceed
        </button>
    </center>
</div>`;
win.document.body.appendChild(infoModal);

            const handleGetSelector = () => Array.from(win.document.getElementsByTagName("*")).forEach((el) => {
                
                const getTheSelectorString = (event) => {
                    event.preventDefault();
                    let selectorStr = CssSelectorGenerator.getCssSelector(
                        event.target,
                        {
                            blacklist: ['[href]'],
                        }
                        
                    );
                    selectorStr = unescape(selectorStr.replace("\\3A ", ':').replace("\\3A", ':'))
                    selectorInput.value = selectorStr.toString();

                    win.close();
                    window.focus();
                    return selectorInput.focus();

                    }
                
                if ((el.tagName.toUpperCase() == 'A') || (el.tagName.toUpperCase() == 'FORM')) {
                    el.addEventListener("dblclick", getTheSelectorString);
                    el.addEventListener("contextmenu", getTheSelectorString);
                }
            });

            handleGetSelector();

            // handle forms
            const handleForms = async () => Array.from(win.document.querySelectorAll('[type=submit]')).forEach(btn => {
                console.log(btn);
                return true
            });

            handleForms();

            const handleLinkClicks = () => Array.from(win.document.getElementsByTagName("a")).forEach((el) => {

                const run = async (event) => {
                    event.preventDefault();

                    // show loader
                    const loaderHtml = `<div id="adbirt-loader">
        <style lang="css">
          #adbirt-loader-backscrim {
            display: none;
            width: 100% !important;
            height: 100% !important;
            padding: 0px !important;
            margin: 0px !important;
            position: fixed !important;
            top: 0;
            left: 0;
            z-index: 999999999;
            display: flex !important;
            background-color: #000000a9;
            align-items: center !important;
            justify-content: center !important;
            flex-direction: column !important;
          }

          #adbirt-loader {
            width: 300px !important;
            height: 100px !important;
            background-color: #fff !important;
            box-shadow: 0px 1px 4px 8px;
            border-radius: 5px;
            overflow: hidden !important;
          }

          #adbirt-loader-spinner-holder {
            float: left !important;
          }

          #adbirt-loader-spinner {
            border-radius: 50px !important;
            width: 50px !important;
            height: 50px !important;
            aspect-ratio: 1;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-left: 5px solid #2196F3;
            border-right: 5px solid #0f0;
            animation-name: spin;
            animation-iteration-count: infinite;
            animation-delay: 0s;
            animation-duration: 1s;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(360deg);
            }
          }

          #adbirt-loader-text-holder {
            float: left !important;
          }

          #adbirt-loader-text {
            font-weight: 900;
            color: #2196F3;
          }
        </style>
        <div>Adbirt.com</div>
        <center id="adbirt-loader-spiner-holder">
          <div id="adbirt-loader-spinner">&nbsp;</div>
        </center>
        <center id="adbirt-loader-text-holder">
          <span id="adbirt-loader-text">Rendering, please wait...</span>
        </center>
      </div>`;

                    win.loader = win.document.createElement('div');
                    win.document.body.appendChild(win.loader);
                    win.loader.setAttribute('id', 'adbirt-loader-backscrim');
                    win.loader.innerHTML = loaderHtml;
                    setTimeout(() => {win.loader.style.display = 'block'}, 1000);

                    try {

                        const html = await (await fetch(`https://us-central1-adbirt-e0cd0.cloudfunctions.net/ssr?url=${encodeURIComponent(
                      el.href
                    )}&noCacheToken=${Math.random()}`,{mode: 'cors'})).text();

                    win.document.querySelector('html').innerHTML = html;

                    // hide loader
                    win.loader.remove();

                    return setTimeout(() => {
                        handleGetSelector();
                        handleForms();
                        handleLinkClicks();
                    }, 500)

                    } catch (error) {
                        console.error(error);
                        win.loader.remove();
                    }
                };

                el.href && el.addEventListener("click", run);
                
                return false;
            });

            handleLinkClicks();

            window.focus();
            window.document.body.style.cursor = "pointer";
        } catch (error) {
            console.error(error);
            loader.innerHTML = "";
            alert(`Network error, unable to render\n ${error.message}`);
        }
    };
})();
                                </script>

                            </div>
                        </div>
                        <!--  -->
		@if(Auth::user()->hasRole('admin'))
			 <div class="form-group" id="sigformselect">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="formLabel">Advertiser Signup Form/class Id</label>
                                </div>
                                <div class="col-md-8">
                                    <select id="formselectid" name="formselect">
                                    	<option value="formid">Form Id</option>
                                    	<option value="formclass">Form Class</option>
                                    </select>
                                </div>
                            </div>
                         </div>

			<div class="form-group" id="sigformid">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="formLabel">Advertiser Signup Form Id</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" name="form_id" parsley-trigger="change" placeholder="Advertiser Signup Form Id" class="form-control" id="form_id" title="" @if ( isset($campaignsData) && !empty($campaignsData->form_id)) value="{{ $campaignsData->form_id }}" @endif>
                                </div>
                            </div>
                        </div>
			<div class="form-group" id="sigformclass">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="formLabel">Advertiser Signup Form Class</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" name="form_class" parsley-trigger="change" placeholder="Advertiser Signup Form Class" class="form-control" id="form_class" title="" @if ( isset($campaignsData) && !empty($campaignsData->form_class)) value="{{ $campaignsData->form_class }}" @endif>
                                </div>
                            </div>
                        </div>


			
			<div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="formLabel">Advertiser Signup Form DOM Modified HTML</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" name="dom_modified" parsley-trigger="change" placeholder="Advertiser Signup DOM Modified HTML" class="form-control" id="dom_modified" title="" @if ( isset($campaignsData) && !empty($campaignsData->dom_modified)) value="{{ $campaignsData->dom_modified }}" @endif>
                                </div>
                            </div>
                        </div>
			 @endif
                        <!--<div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="formLabel">Advertiser Signup Form Button's Id</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" name="button_id" parsley-trigger="change" required placeholder="Advertiser Signup Form Button's Id" class="form-control" id="button_id" title="" @if ( isset($campaignsData) && !empty($campaignsData->button_id)) value="{{ $campaignsData->button_id }}" @endif>
                                </div>
                            </div>
                        </div> -->
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="formLabel">Select Banner Size</label>
                                </div>
                                <div class="col-md-8">
                                    <select name="banner_size" data-placeholder="Select an option" class="form-control" id="banner_size">
                                        <option selected disabled>Select Banner Size</option>
                                        @if(isset($bannerSize) && !empty($bannerSize))
                                            @foreach($bannerSize as $key => $value )
                                                @if(isset($campaignsData) && $campaignsData->banner_size == $value)
                                                    <option value="{{ $value }}" selected>{{ $value }}</option>
                                                @else
                                                    <option value="{{ $value }}">{{ $value }}</option>
                                                @endif
                                            @endforeach
                                        @endif
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="formLabel">Campaign`s Banner</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="file" class="filestyle" name="campaign_banner" id="upld" data-buttontext="Choose Banner" data-buttonname="btn-white">
                                    <hr></div>
                                    <div class="col-md-12">
                                    @if ( isset($campaignsData) && !empty($campaignsData->campaign_banner))
                                     <img style="width: 100%;" src="{{ asset('uploads/campaign_banners/'.$campaignsData->campaign_banner) }}" id="" class="img-responsive" > </div>
                                     <div class="col-md-8">
                                    <input type="hidden" name="campaign_banner" value="{{ $campaignsData->campaign_banner }}">
                                    @else
                                    <img style="width: 100%;" src="{{ asset('assets/photos/Placeholder.jpg') }}" class="img-responsive" id="view">
                                    @endif   
                                </div>

                                <span style="color:red;" id="response"></span>
                                <!-- <span id="width"></span>
                                    <span id="height"></span> -->
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-4">
                                        <label class="formLabel">Campaign`s Cost Per Action ($)</label>
                                    </div>    
                                    <div class="col-md-8">
                                        <input type="text" min="0.20" name="campaign_cost_per_action" parsley-trigger="change" required placeholder="($) Campaign Cost Per Action" class="form-control" id="campaign_cost_per_action" title="" @if ( isset($campaignsData) && !empty($campaignsData->campaign_cost_per_action)) value="{{ $campaignsData->campaign_cost_per_action }}" @endif>
                                    </div>
                                </div>
                            </div>
                            @if(Auth::user()->hasRole('admin'))
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-4">
                                        <label class="formLabel">Select Advertiser</label>
                                    </div>
                                    <div class="col-md-8">
                                        <select name="advertiser_id" data-placeholder="Select an option" class="form-control" id="advertiser_id">
                                            @if ( isset($Advertiser) && count($Advertiser) > 0 )
                                            <option value="">Select Advertiser</option>
                                            @foreach ($Advertiser as $value)
                                            @if ( isset($campaignsData) && $campaignsData->advertiser_id == $value->user_id )
                                            <option value="{{ $value->user_id }}" selected>{{ $value->GetVendor->name }}</option>
                                            @else
                                            <option value="{{ $value->user_id }}">{{ $value->GetVendor->name }}</option>
                                            @endif
                                            @endforeach
                                            @endif
                                        </select>
                                    </div>
                                </div>
                            </div>
                            @else
                            <input type="hidden" name="advertiser_id" value="{{ Auth::user()->id }}">
                            @endif
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-4">
                                        <label class="formLabel">Campaign`s Policy</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <textarea  name="campaign_policy" parsley-trigger="change" required placeholder="Campaign`s Policy" class="form-control" id="campaign_policy" title="" >@if ( isset($campaignsData) && !empty($campaignsData->campaign_policy)) {{ $campaignsData->campaign_policy }} @endif </textarea>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div class="form-group text-right m-b-0">
                            <button class="btn btn-primary waves-effect waves-light" type="submit" id="btn-submit">
                                @if(isset($campaignsData))  Update  @else   Save  @endif  <i class="icon-arrow-right14 position-right"></i>
                            </button>
                            <a href="{{ url('/campaigns/view-campaigns') }}" type="reset" class="btn btn-danger waves-effect waves-light m-l-5">
                                Cancel
                            </a>
                        </div>
                    </form>
                </div>  
            </div><!-- /.box -->
        </div></div><!-- /.col -->
    </div><!-- /.row -->
</section><!-- /.content -->


<!-- Modal for delete confirm -->

<!-- jQuery -->

{!! Html::script('dist/vendor/jquery.min.js') !!} 

<!-- Bootstrap -->

{!! Html::script('dist/vendor/tether.min.js') !!} 

{!! Html::script('dist/vendor/bootstrap.min.js') !!} 

<!-- AdminPlus -->

{!! Html::script('dist/vendor/adminplus.js') !!}

<!-- App JS -->

{!! Html::script('dist/js/main.min.js') !!}


@section('script')
{!! Html::script('https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.16.0/jquery.validate.min.js') !!}

{!! Html::script('https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.16.0/additional-methods.min.js') !!}


<script type="text/javascript" src="{{ asset('assets/ckeditor/ckeditor.js') }}"></script>
<script src="{{ asset('assets/js/sweetalert.min.js') }}"></script>

<script type="text/javascript">
    CKEDITOR.replace('campaign_description');
    CKEDITOR.replace('campaign_policy');
    
    function readURL(input) {                  // quiz_avatar preview
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#view').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#banner_size").change(function(event) {
        $('#upld').val("");
    });
    
    @if(isset($campaignsData))
        var isbannerValid = true; 
    @else
        var isbannerValid = false; 
    @endif
    $("#upld").on("change",function(){
        var _URL = window.URL || window.webkitURL;
        event.preventDefault();
        var file = $(this)[0].files[0];
        var banner_size = $("#banner_size").val();
        if(banner_size != ""){
            readURL(this);
            var size = banner_size.split(' x ');
            img = new Image();
            var imgwidth = 0;
            var imgheight = 0;
            var maxwidth = size['0'];
            var maxheight = size['1'];

            img.src = _URL.createObjectURL(file);
            img.onload = function() {
                imgwidth = this.width;
                imgheight = this.height;
                    if(imgwidth == maxwidth && imgheight == maxheight){
                        $("#response").text("");
                        isbannerValid = true;
                    }else{
                        $("#response").text("Image size must be "+maxwidth+"X"+maxheight);
                        isbannerValid = false;
                    }
                };
                img.onerror = function() {
                    $("#response").text("not a valid file: " + file.type);
                }
            }else{
                swal({
                    title: "Warning!",
                    text: "Select Banner Size First!",
                    type: "warning",
                    confirmButtonClass: 'btn-danger',
                    confirmButtonText: 'Ok',
                    closeOnConfirm: true,
                },
                function(){
                    $('#upld').val("");
                });
            }
        });

    jQuery(document).ready(function() {

        
        $("#myform").validate({
            errorPlacement: function(error,element) {
                return true;
            },
            rules:{
                campaign_name:{
                    required: true,
                },  
                campaign_title:{
                    required: true,
                },
                @if (!isset($campaignsData))
                campaign_banner:{
                    required: true,
                },
                @endif
                campaign_url:{
                    required: true,
                    url:true,
                },
                campaign_success_url:{
                    required: true,
                    url:false,
                },
                campaign_policy:{
                    required: function(textarea) {
                        CKEDITOR.instances[textarea.id].updateElement(); // update textarea
                        var editorcontent = textarea.value.replace(/<[^>]*>/gi, ''); // strip tags
                        return editorcontent.length === 0;
                    },
                },
                campaign_description:{
                    required: function(textarea) {
                        CKEDITOR.instances[textarea.id].updateElement(); // update textarea
                        var editorcontent = textarea.value.replace(/<[^>]*>/gi, ''); // strip tags
                        return editorcontent.length === 0;
                    },
                },
                advertiser_id:{
                    required: true,
                },
                campaign_category:{
                    required: true,
                },
                isbannerValid:{
                    required: true,
                },
                banner_size:{
                    required: true,
                },
                campaign_cost_per_action:{
                    required:true,
                    number:true,
                },
            },
            submitHandler: function(form){
		//form.submit();
                if(isbannerValid){
                    $('#btn-submit').hide();
                    form.submit();
                }else{
                    alert('selected banner not match with selected size, please try agian');
                }
            }
        });
    });
</script>
@stop
