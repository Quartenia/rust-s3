var searchIndex = JSON.parse('{\
"awscreds":{"doc":"","t":[3,3,3,3,3,3,12,12,11,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,5,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["AssumeRoleWithWebIdentityResponse","AssumeRoleWithWebIdentityResult","AssumedRoleUser","Credentials","ResponseMetadata","StsResponseCredentials","access_key","access_key_id","anonymous","arn","assume_role_with_web_identity_result","assumed_role_id","assumed_role_user","audience","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","credentials","default","deserialize","deserialize","deserialize","deserialize","deserialize","eq","expiration","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from_env","from_env_specific","from_instance_metadata","from_profile","from_sts","from_sts_env","into","into","into","into","into","into","ne","new","provider","request_id","response_metadata","secret_access_key","secret_key","security_token","session_token","session_token","set_request_timeout","subject_from_web_identity_token","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id"],"q":["awscreds","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","","AWS access credentials: access key, secret key, and …","","","AWS public access key.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Initialize Credentials directly with key ID, secret key, …","","","","","AWS secret key.","Temporary token issued by AWS service.","","","Sets the timeout for all credentials HTTP requests and …","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,0,0,1,2,1,3,4,3,5,5,1,4,5,2,3,6,1,4,5,2,3,6,1,1,5,1,4,5,2,3,6,1,2,1,4,5,2,3,6,1,4,5,2,3,6,1,1,1,1,1,1,1,4,5,2,3,6,1,1,5,6,4,2,1,1,1,2,0,5,1,1,4,5,2,3,6,1,4,5,2,3,6,1,4,5,2,3,6],"f":[null,null,null,null,null,null,null,null,[[],["result",6,[["credentials",3]]]],null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["credentials",3]],[[]],null,[[],["result",6,[["credentials",3]]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["credentials",3]],["bool",15]],null,[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",6,[["credentials",3]]]],[[["option",4,[["str",15]]],["option",4,[["str",15]]],["option",4,[["str",15]]],["option",4,[["str",15]]]],["result",6,[["credentials",3]]]],[[],["result",6,[["credentials",3]]]],[[["option",4,[["str",15]]]],["result",6,[["credentials",3]]]],[[["str",15],["str",15],["str",15]],["result",6,[["credentials",3]]]],[[["str",15]],["result",6,[["credentials",3]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[["credentials",3]],["bool",15]],[[["option",4,[["str",15]]],["option",4,[["str",15]]],["option",4,[["str",15]]],["option",4,[["str",15]]],["option",4,[["str",15]]]],["result",6,[["credentials",3]]]],null,null,null,null,null,null,null,null,[[["option",4,[["duration",3]]]],["option",4,[["duration",3]]]],null,[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]]],"p":[[3,"Credentials"],[3,"StsResponseCredentials"],[3,"AssumedRoleUser"],[3,"AssumeRoleWithWebIdentityResponse"],[3,"AssumeRoleWithWebIdentityResult"],[3,"ResponseMetadata"]]},\
"awsregion":{"doc":"","t":[13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,4,13,13,13,13,13,13,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12],"n":["AfSouth1","ApEast1","ApNortheast1","ApNortheast2","ApNortheast3","ApSouth1","ApSoutheast1","ApSoutheast2","CaCentral1","CnNorth1","CnNorthwest1","Custom","DoAms3","DoFra1","DoNyc3","DoSgp1","EuCentral1","EuNorth1","EuWest1","EuWest2","EuWest3","MeSouth1","Region","SaEast1","UsEast1","UsEast2","UsWest1","UsWest2","WaEuCentral1","WaUsEast1","WaUsEast2","WaUsWest1","Yandex","borrow","borrow_mut","clone","clone_into","endpoint","eq","fmt","fmt","from","from_str","host","into","ne","scheme","to_owned","to_string","try_from","try_into","type_id","endpoint","region"],"q":["awsregion","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","awsregion::Region",""],"d":["af-south-1","ap-east-1","ap-northeast-1","ap-northeast-2","ap-northeast-3","ap-south-1","ap-southeast-1","ap-southeast-2","ca-central-1","cn-north-1","cn-northwest-1","Custom region","Digital Ocean ams3","Digiral Ocean fra1","Digital Ocean nyc3","Digital Ocean sgp1","eu-central-1","eu-north-1","eu-west-1","eu-west-2","eu-west-3","me-south-1","AWS S3 region identifier, passing in custom values is also …","sa-east-1","us-east-1","us-east-2","us-west-1","us-west-2","Wasabi eu-central-1","Wasabi us-east-1","Wasabi us-east-2","Wasabi us-west-1","Yandex Object Storage","","","","","","","","","","","","","","","","","","","","",""],"i":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[],["region",4]],[[]],[[],["string",3]],[[["region",4]],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[["str",15]],["result",6]],[[],["string",3]],[[]],[[["region",4]],["bool",15]],[[],["string",3]],[[]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null],"p":[[4,"Region"],[13,"Custom"]]},\
"s3":{"doc":"Simple access to Amazon Web Service’s (AWS) Simple …","t":[13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,4,13,13,13,13,13,13,13,13,13,13,11,11,0,0,11,11,0,0,11,11,11,11,11,11,11,11,11,11,0,0,11,0,0,11,11,11,11,11,0,12,12,3,17,6,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,12,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,3,3,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,11,13,4,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,4,13,13,13,13,3,13,13,13,13,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,5,3,11,11,11,12,11,12,11,12,11,11,11,11,12,11,11,11,11,12,11,11,11,16,8,16,11,10,11,10,10,11,11,11,10,11,11,11,11,11,10,10,10,10,11,11,11,3,3,3,3,3,3,3,3,3,3,3,3,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,11,12,12,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,12,12,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,17,17,6,5,5,5,5,5,5,5,5,5,5,5,8,5,10,10,5],"n":["AfSouth1","ApEast1","ApNortheast1","ApNortheast2","ApNortheast3","ApSouth1","ApSoutheast1","ApSoutheast2","CaCentral1","CnNorth1","CnNorthwest1","Custom","DoAms3","DoFra1","DoNyc3","DoSgp1","EuCentral1","EuNorth1","EuWest1","EuWest2","EuWest3","MeSouth1","Region","SaEast1","UsEast1","UsEast2","UsWest1","UsWest2","WaEuCentral1","WaUsEast1","WaUsEast2","WaUsWest1","Yandex","borrow","borrow_mut","bucket","bucket_ops","clone","clone_into","command","deserializer","endpoint","eq","equivalent","fmt","fmt","from","from_str","host","into","ne","request","request_trait","scheme","serde_types","signing","to_owned","to_string","try_from","try_into","type_id","utils","endpoint","region","Bucket","CHUNK_SIZE","Query","Tag","abort_upload","access_key","add_header","add_query","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","copy_object_internal","create","create_with_path_style","credentials","credentials","delete","delete_object","delete_object_tagging","eq","eq","equivalent","extra_headers","extra_headers","extra_headers_mut","extra_query","extra_query","extra_query_mut","fmt","fmt","from","from","get_object","get_object_range","get_object_stream","get_object_tagging","get_object_torrent","head_object","host","into","into","is_path_style","is_subdomain_style","key","list","list_multiparts_uploads","list_multiparts_uploads_page","list_page","location","name","name","ne","ne","new","new_public","new_public_with_path_style","new_with_path_style","path_style_host","presign_delete","presign_get","presign_put","put_object","put_object_stream","put_object_tagging","put_object_with_content_type","region","region","request_timeout","scheme","secret_key","security_token","session_token","set_credentials","set_listobjects_v1","set_listobjects_v2","set_path_style","set_request_timeout","set_subdomain_style","subdomain_style_host","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","url","value","BucketConfiguration","CreateBucketResponse","add_headers","borrow","borrow","borrow_mut","borrow_mut","bucket","clone","clone_into","default","fmt","from","from","into","into","location_constraint_payload","private","public","response_code","response_text","set_location_constraint","set_region","success","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","AbortMultipartUpload","Command","CompleteMultipartUpload","CopyObject","CreateBucket","Delete","DeleteBucket","DeleteObject","DeleteObjectTagging","Get","GetBucketLocation","GetObject","GetObjectRange","GetObjectTagging","GetObjectTorrent","Head","HeadObject","HttpMethod","InitiateMultipartUpload","ListMultipartUploads","ListObjects","ListObjectsV2","Multipart","Post","PresignDelete","PresignGet","PresignPut","Put","PutObject","PutObjectTagging","UploadPart","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","content_length","content_type","fmt","fmt","fmt","from","from","from","http_verb","into","into","into","new","query_string","sha256","to_owned","to_owned","to_string","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","config","content","content","content_type","continuation_token","custom_headers","data","delimiter","delimiter","delimiter","end","expiry_secs","expiry_secs","expiry_secs","from","key_marker","marker","max_keys","max_keys","max_uploads","multipart","part_number","prefix","prefix","prefix","start","start_after","tags","upload_id","upload_id","upload_id","bool_deserializer","Reqwest","borrow","borrow_mut","bucket","bucket","command","command","datetime","datetime","from","into","new","path","path","response","response_data","response_data_to_writer","response_header","sync","try_from","try_into","type_id","HeaderMap","Request","Response","authorization","bucket","canonical_request","command","datetime","headers","host_header","long_date","path","presigned","presigned_authorization","presigned_canonical_request","presigned_url_no_sig","request_body","response","response_data","response_data_to_writer","response_header","signing_key","string_to_sign","url","AwsError","BucketLocationResult","CommonPrefix","CompleteMultipartUploadData","HeadObjectResult","InitiateMultipartUploadResponse","ListBucketResult","ListMultipartUploadsResult","MultipartUpload","Object","Owner","Part","accept_ranges","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","cache_control","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","code","common_prefixes","common_prefixes","content_disposition","content_encoding","content_language","content_length","content_type","contents","continuation_token","default","delete_marker","delimiter","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","display_name","e_tag","e_tag","encoding_type","encoding_type","etag","expiration","expires","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","id","id","initiated","into","into","into","into","into","into","into","into","into","into","into","into","is_empty","is_truncated","is_truncated","key","key","key","last_modified","last_modified","len","marker","max_keys","message","metadata","missing_meta","name","name","next_continuation_token","next_marker","object_lock_legal_hold_status","object_lock_mode","object_lock_retain_until_date","owner","owner","part_number","parts","parts_count","prefix","prefix","prefix","region","replication_status","request_charged","request_id","restore","serialize","server_side_encryption","size","sse_customer_algorithm","sse_customer_key_md5","ssekms_key_id","storage_class","storage_class","storage_class","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","upload_id","uploads","version_id","website_redirect_location","FRAGMENT","FRAGMENT_SLASH","HmacSha256","authorization_header","authorization_query_params_no_sig","canonical_header_string","canonical_query_string","canonical_request","canonical_uri_string","scope_string","signed_header_string","signing_key","string_to_sign","uri_encode","GetAndConvertHeaders","etag_for_path","get_and_convert","get_string","read_chunk"],"q":["s3","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","s3::Region","","s3::bucket","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","s3::bucket_ops","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","s3::command","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","s3::command::Command","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","s3::deserializer","s3::request","","","","","","","","","","","","","","","","","","","","","","s3::request_trait","","","","","","","","","","","","","","","","","","","","","","","","s3::serde_types","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","s3::signing","","","","","","","","","","","","","","s3::utils","","","",""],"d":["af-south-1","ap-east-1","ap-northeast-1","ap-northeast-2","ap-northeast-3","ap-south-1","ap-southeast-1","ap-southeast-2","ca-central-1","cn-north-1","cn-northwest-1","Custom region","Digital Ocean ams3","Digiral Ocean fra1","Digital Ocean nyc3","Digital Ocean sgp1","eu-central-1","eu-north-1","eu-west-1","eu-west-2","eu-west-3","me-south-1","AWS S3 region identifier, passing in custom values is also …","sa-east-1","us-east-1","us-east-2","us-west-1","us-west-2","Wasabi eu-central-1","Wasabi us-east-1","Wasabi us-east-2","Wasabi us-west-1","Yandex Object Storage","","","","","","","","","","","","","","","","","","","","","","","Implementation of AWS V4 Signing","","","","","","","","","Instantiate an existing Bucket","","","","Abort a running multipart upload.","Get a reference to the AWS access key.","Add an extra header to send with requests to S3.","Add an extra query pair to the URL used for S3 API access.","","","","","","","Copy file from an S3 path, internally within the same …","Create a new <code>Bucket</code> and instantiate it","Create a new <code>Bucket</code> with path style and instantiate it","Get a reference to the full <code>Credentials</code> object used by …","","Delete existing <code>Bucket</code>","Delete file from an S3 path.","Delete tags from an S3 object.","","","","Get a reference to the extra headers to be passed to the …","","Get a mutable reference to the extra headers to be passed …","Get a reference to the extra query pairs to be passed to …","","Get a mutable reference to the extra query pairs to be …","","","","","Gets file from an S3 path.","Gets specified inclusive byte range of file from an S3 …","Stream file from S3 path to a local file, generic over T: …","Retrieve an S3 object list of tags.","Gets torrent from an S3 path.","Head object from S3.","","","","Get path_style field of the Bucket struct","Get negated path_style field of the Bucket struct","","List the contents of an S3 bucket.","List the ongoing multipart uploads of an S3 bucket. This …","","","Get Bucket location.","Get a reference to the name of the S3 bucket.","","","","Instantiate an existing <code>Bucket</code>.","Instantiate a public existing <code>Bucket</code>.","Instantiate a public existing <code>Bucket</code> with path style …","Instantiate an existing <code>Bucket</code> with path style addressing. …","Get a paths-style reference to the hostname of the S3 API …","Get a presigned url for deleting object on a given path","Get a presigned url for getting object on a given path","Get a presigned url for putting object to a given path","Put into an S3 bucket.","Stream file from local path to s3, generic over T: Write.","Tag an S3 object.","Put into an S3 bucket, with explicit content-type.","Get the region this object will connect to.","","","","Get a reference to the AWS secret key.","Get a reference to the AWS security token.","Get a reference to the AWS session token.","Change the credentials used by the Bucket, returning the …","Configure bucket to use the older ListObjects API","Configure bucket to use the newer ListObjectsV2 API","Configure bucket to use path-style urls and headers","Configure bucket to apply this request timeout to all HTTP …","Configure bucket to use subdomain style urls and headers …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","<code>CommonPrefix</code> is used to group keys","","","","The parsed result of a s3 bucket listing","The parsed result of a s3 bucket listing of uploads","An individual upload in a <code>ListMultipartUploadsResult</code>","An individual object in a <code>ListBucketResult</code>","Owner information for the object","","Indicates that a range of bytes was specified.","","","","","","","","","","","","","","","","","","","","","","","","","Specifies caching behavior along the request/reply chain.","","","","","","","","","","","","","","","","","","","","","","All of the keys rolled up into a common prefix count as a …","All of the keys rolled up into a common prefix count as a …","Specifies presentational information for the object.","Specifies what content encodings have been applied to the …","The language the content is in.","Size of the body in bytes.","A standard MIME type describing the format of the object …","Metadata about each object returned.","Indicates where in the bucket listing begins. It is …","","Specifies whether the object retrieved was (true) or was …","A delimiter is a character you use to group keys.","","","","","","","","","","","Object owner’s name.","The entity tag is an MD5 hash of the object. The ETag only …","An ETag is an opaque identifier assigned by a web server …","Specifies the encoding method to used","Specifies the encoding method to used","","If the object expiration is configured, the response …","The date and time at which the object is no longer …","","","","","","","","","","","","","","","","","","","","","","","","","","","Object owner’s ID.","The identifier of the upload","Date and time the multipart upload was initiated","","","","","","","","","","","","","","Specifies whether (true) or not (false) all of the results …","Specifies whether (true) or not (false) all of the results …","","The object’s key","The object’s key","Date and time the object was last modified.","Last modified date of the object","","Indicates where in the bucket listing begins.","Sets the maximum number of keys returned in the response …","","A map of metadata to store with the object in S3.","This is set to the number of metadata entries not returned …","Name of the bucket.","Name of the bucket.","","When the response is truncated (that is, the IsTruncated …","Specifies whether a legal hold is in effect for this …","The Object Lock mode, if any, that’s in effect for this …","The date and time when the Object Lock retention period …","Bucket owner","Bucket owner","","","The count of parts this object has.","Limits the response to keys that begin with the specified …","The prefix, present if the request contained a prefix too, …","Keys that begin with the indicated prefix.","","If your request involves a bucket that is either a source …","","","If the object is an archived object (an object whose …","","If the object is stored using server-side encryption …","Size in bytes of the object.","If server-side encryption with a customer-provided …","If server-side encryption with a customer-provided …","If present, specifies the ID of the AWS Key Management …","STANDARD | STANDARD_IA | REDUCED_REDUNDANCY | GLACIER","STANDARD | STANDARD_IA | REDUCED_REDUNDANCY | GLACIER","Provides storage class information of the object. Amazon …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Metadata about each upload returned.","Version of the object.","If the bucket is configured as a website, redirects …","","","","Generate the AWS authorization header.","","Generate a canonical header string from the provided …","Generate a canonical query string from the query pairs in …","Generate a canonical request.","Generate a canonical URI string from the given URL.","Generate an AWS scope string.","Generate a signed header string from the provided headers.","Generate the AWS signing key, derived from the secret key, …","Generate the “string to sign” - the value to which the …","Encode a URI following the specific requirements of the …","","Example","","",""],"i":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,2,2,0,0,0,0,3,3,3,3,4,3,4,3,3,3,3,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,4,3,4,3,3,3,3,3,3,3,3,4,3,3,3,4,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,3,4,3,4,3,3,4,0,0,5,6,5,6,5,6,5,5,5,5,6,5,6,5,5,5,5,6,6,5,5,6,5,6,5,6,5,6,5,7,0,7,7,7,8,7,7,7,8,7,7,7,7,7,8,7,0,7,7,7,7,0,8,7,7,7,8,7,7,7,8,9,7,8,9,7,9,7,9,7,7,7,8,9,7,8,9,7,7,8,9,7,9,9,7,9,7,8,8,9,7,8,9,7,8,9,7,10,11,12,11,13,14,15,16,17,13,18,19,14,20,21,16,17,17,13,16,11,12,16,17,13,18,13,22,12,23,15,0,0,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,0,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,0,0,0,0,0,0,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,26,37,27,28,29,30,31,32,33,34,35,36,26,37,26,28,29,30,31,32,33,34,35,36,26,28,29,30,31,32,33,34,35,36,26,37,34,35,26,26,26,26,26,34,34,26,26,34,27,28,29,30,33,34,35,36,26,37,28,29,26,34,35,32,26,26,27,28,29,30,31,31,32,33,34,35,36,26,37,27,28,29,30,31,32,33,34,35,36,26,26,37,28,30,30,27,28,29,30,31,32,33,34,35,36,26,37,31,34,35,27,29,30,29,26,31,35,34,37,26,26,34,35,34,35,26,26,26,29,30,32,31,26,34,35,36,33,26,26,37,26,32,26,29,26,26,26,29,30,26,28,29,30,31,32,33,34,35,36,26,31,27,28,29,30,31,32,33,34,35,36,26,37,27,28,29,30,31,32,33,34,35,36,26,37,27,28,29,30,31,32,33,34,35,36,26,37,27,35,26,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,38,0],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],null,null,[[],["region",4]],[[]],null,null,[[],["string",3]],[[["region",4]],["bool",15]],[[],["bool",15]],[[["formatter",3]],["result",4,[["error",3]]]],[[["formatter",3]],["result",4,[["error",3]]]],[[]],[[["str",15]],["result",4,[["region",4],["error",3]]]],[[],["string",3]],[[]],[[["region",4]],["bool",15]],null,null,[[],["string",3]],null,null,[[]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null,null,null,null,null,null,[[["str",15],["str",15]]],[[],["option",4,[["string",3]]]],[[["str",15],["str",15]]],[[["str",15],["str",15]]],[[]],[[]],[[]],[[]],[[],["bucket",3]],[[]],[[["asref",8,[["str",15]]],["asref",8,[["str",15]]]]],[[["str",15],["region",4],["credentials",3],["bucketconfiguration",3]]],[[["str",15],["region",4],["credentials",3],["bucketconfiguration",3]]],[[],["credentials",3]],null,[[]],[[["asref",8,[["str",15]]]]],[[["asref",8,[["str",15]]]]],[[["tag",3]],["bool",15]],[[["bucket",3]],["bool",15]],[[],["bool",15]],[[],["headermap",3]],null,[[],["headermap",3]],[[],["query",6]],null,[[],["query",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[["asref",8,[["str",15]]]]],[[["asref",8,[["str",15]]],["u64",15],["option",4,[["u64",15]]]]],[[["asref",8,[["str",15]]]]],[[["asref",8,[["str",15]]]]],[[["asref",8,[["str",15]]]]],[[["asref",8,[["str",15]]]]],[[],["string",3]],[[]],[[]],[[],["bool",15]],[[],["bool",15]],[[],["string",3]],[[["string",3],["option",4,[["string",3]]]]],[[["option",4,[["str",15]]],["option",4,[["str",15]]]]],[[["option",4,[["str",15]]],["option",4,[["str",15]]],["option",4,[["string",3]]],["option",4,[["usize",15]]]]],[[["string",3],["option",4,[["string",3]]],["option",4,[["string",3]]],["option",4,[["string",3]]],["option",4,[["usize",15]]]]],[[]],[[],["string",3]],null,[[["tag",3]],["bool",15]],[[["bucket",3]],["bool",15]],[[["str",15],["region",4],["credentials",3]],["result",6,[["bucket",3]]]],[[["str",15],["region",4]],["result",6,[["bucket",3]]]],[[["str",15],["region",4]],["result",6,[["bucket",3]]]],[[["str",15],["region",4],["credentials",3]],["result",6,[["bucket",3]]]],[[],["string",3]],[[["asref",8,[["str",15]]],["u32",15]],["result",6,[["string",3]]]],[[["asref",8,[["str",15]]],["u32",15]],["result",6,[["string",3]]]],[[["asref",8,[["str",15]]],["u32",15],["option",4,[["headermap",3]]]],["result",6,[["string",3]]]],[[["asref",8,[["str",15]]]]],[[]],[[["str",15]]],[[["asref",8,[["str",15]]],["str",15]]],[[],["region",4]],null,null,[[],["string",3]],[[],["option",4,[["string",3]]]],[[],["option",4,[["str",15]]]],[[],["option",4,[["str",15]]]],[[["credentials",3]],["credentials",3]],[[]],[[]],[[]],[[["option",4,[["duration",3]]]]],[[]],[[],["string",3]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["string",3]],[[],["string",3]],null,null,[[["headermap",3]],["result",6]],[[]],[[]],[[]],[[]],null,[[],["bucketconfiguration",3]],[[]],[[]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[],["option",4,[["string",3]]]],[[]],[[]],null,null,[[["region",4]]],[[["region",4]]],[[],["bool",15]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[],["multipart",3]],[[],["command",4]],[[]],[[]],[[],["usize",15]],[[],["string",3]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[],["httpmethod",4]],[[]],[[]],[[]],[[["u32",15],["str",15]]],[[],["string",3]],[[],["string",3]],[[]],[[]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[],["result",4,[["bool",15]]]],null,[[]],[[]],[[],["bucket",3]],null,[[],["command",4]],null,[[],["offsetdatetime",3]],null,[[]],[[]],[[["bucket",3],["str",15],["command",4]],["reqwest",3]],[[],["string",3]],null,[[],["pin",3,[["box",3,[["future",8]]]]]],[[["bool",15]],["pin",3,[["box",3,[["future",8]]]]]],[[],["pin",3,[["box",3,[["future",8]]]]]],[[],["pin",3,[["box",3,[["future",8]]]]]],null,[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null,null,[[["headermap",3]],["result",6,[["string",3]]]],[[],["bucket",3]],[[["headermap",3]],["string",3]],[[],["command",4]],[[],["offsetdatetime",3]],[[],["result",6,[["headermap",3]]]],[[],["string",3]],[[],["string",3]],[[],["string",3]],[[],["result",6,[["string",3]]]],[[["option",4,[["headermap",3]]]],["result",6,[["string",3]]]],[[["headermap",3]],["result",6,[["string",3]]]],[[["u32",15],["option",4,[["headermap",3]]]],["result",6,[["url",3]]]],[[],["vec",3,[["u8",15]]]],[[],["pin",3,[["box",3,[["future",8]]]]]],[[["bool",15]],["pin",3,[["box",3,[["future",8]]]]]],[[],["pin",3,[["box",3,[["future",8]]]]]],[[],["pin",3,[["box",3,[["future",8]]]]]],[[],["result",6,[["vec",3,[["u8",15]]]]]],[[["str",15]],["string",3]],[[],["url",3]],null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,[[],["owner",3]],[[],["object",3]],[[],["multipartupload",3]],[[],["completemultipartuploaddata",3]],[[],["part",3]],[[],["bucketlocationresult",3]],[[],["listbucketresult",3]],[[],["listmultipartuploadsresult",3]],[[],["commonprefix",3]],[[],["headobjectresult",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,null,null,null,null,null,null,null,null,[[],["headobjectresult",3]],null,null,[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],null,null,null,null,null,null,null,null,[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["headermap",3]]],[[]],[[]],null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["bool",15]],null,null,null,null,null,null,null,[[],["usize",15]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[],["result",4]],null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,null,null,null,null,null,null,[[["str",15],["offsetdatetime",3],["region",4],["str",15],["str",15]],["string",3]],[[["str",15],["offsetdatetime",3],["region",4],["u32",15],["option",4,[["headermap",3]]],["option",4,[["str",15]]]],["result",6,[["string",3]]]],[[["headermap",3]],["string",3]],[[["url",3]],["string",3]],[[["str",15],["url",3],["headermap",3],["str",15]],["string",3]],[[["url",3]],["string",3]],[[["offsetdatetime",3],["region",4]],["string",3]],[[["headermap",3]],["string",3]],[[["offsetdatetime",3],["str",15],["region",4],["str",15]],["result",6,[["vec",3,[["u8",15]]]]]],[[["offsetdatetime",3],["region",4],["str",15]],["string",3]],[[["str",15],["bool",15]],["string",3]],null,[[]],[[["str",15]],["option",4,[["fromstr",8]]]],[[["str",15]],["option",4,[["string",3]]]],[[]]],"p":[[4,"Region"],[13,"Custom"],[3,"Bucket"],[3,"Tag"],[3,"BucketConfiguration"],[3,"CreateBucketResponse"],[4,"Command"],[4,"HttpMethod"],[3,"Multipart"],[13,"CreateBucket"],[13,"PutObject"],[13,"UploadPart"],[13,"ListObjectsV2"],[13,"PresignPut"],[13,"CompleteMultipartUpload"],[13,"ListMultipartUploads"],[13,"ListObjects"],[13,"GetObjectRange"],[13,"PresignGet"],[13,"PresignDelete"],[13,"CopyObject"],[13,"PutObjectTagging"],[13,"AbortMultipartUpload"],[3,"Reqwest"],[8,"Request"],[3,"HeadObjectResult"],[3,"InitiateMultipartUploadResponse"],[3,"Owner"],[3,"Object"],[3,"MultipartUpload"],[3,"CompleteMultipartUploadData"],[3,"Part"],[3,"BucketLocationResult"],[3,"ListBucketResult"],[3,"ListMultipartUploadsResult"],[3,"CommonPrefix"],[3,"AwsError"],[8,"GetAndConvertHeaders"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};