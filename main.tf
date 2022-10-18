terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.34.0"
    }
  }
  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-east-1"
}

resource "aws_s3_bucket" "CloudResumeBucket" {
    bucket = "cloudresumevega"
  }

resource "aws_s3_bucket_policy" "CloudResumeACL" {
  bucket = aws_s3_bucket.CloudResumeBucket.bucket
  policy = file("s3policy.json")
}
resource "aws_s3_bucket_acl" "CloudResumeBucket_acl" {
  bucket = aws_s3_bucket.CloudResumeBucket.bucket
  acl    = "private"
}

resource "aws_s3_object" "index" {
  bucket = aws_s3_bucket.CloudResumeBucket.bucket
  key    = "index.html"
  source = "C:\\Users\\Vega\\Desktop\\BuildingMyWeb\\index.html"
}

resource "aws_s3_bucket_website_configuration" "Bucket" {
  bucket = aws_s3_bucket.CloudResumeBucket.bucket

  index_document {
    suffix = "index.html"
  }
}